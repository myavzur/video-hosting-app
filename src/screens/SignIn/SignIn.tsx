import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";

import { ILoginBody } from "@/shared/interfaces/channel.interface";
import { api } from "@/shared/model/root.api";
import styles from "@/shared/styles/AuthorizationForm.module.scss";
import { Button, Logo, PasswordField, TextField, TextLink } from "@/shared/ui";

const SignIn: React.FC = () => {
	const router = useRouter();
	const [login, loginStatus] = api.useLoginMutation();

	const {
		register,
		handleSubmit,
		formState: { isValid, errors }
	} = useForm<ILoginBody>({
		mode: "onChange"
	});

	const handleSignIn: SubmitHandler<ILoginBody> = credential => {
		if (isValid) {
			login(credential)
				.unwrap()
				.then(channel => {
					if (channel.id) {
						router.push("/");
					}
				});
		}
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(handleSignIn)}
		>
			<Logo
				className={styles.form__logo}
				withText={true}
			/>

			<div className={styles.form__fields}>
				<TextField
					{...register("email", {
						minLength: 4,
						maxLength: 60,
						required: "Email is required"
					})}
					className={styles.form__field}
					icon={FaEnvelope}
					placeholder="Enter your Email"
					autoComplete="new-off"
					type="email"
					error={errors.email?.message}
					preventErrorMessage={true}
				/>

				<PasswordField
					{...register("password", {
						minLength: 12,
						maxLength: 60,
						required: "Password is required"
					})}
					className={styles.form__field}
					error={errors.password?.message}
					preventErrorMessage={true}
				/>
			</div>

			<TextLink
				className={styles.form__link}
				href="/auth/recovery"
				kind="secondary"
			>
				Forgot your Password?
			</TextLink>

			<Button
				hint="Submit login form"
				className={styles.form__button}
				kind="secondary"
				type="submit"
				disabled={loginStatus.isLoading && !loginStatus.isError}
			>
				{loginStatus.isLoading && !loginStatus.isError ? "Loading..." : "Sign In"}
			</Button>

			<p className={styles.form__link}>
				{"Don't have an account? "}
				<TextLink href="/auth/sign-up">Sign Up</TextLink>
			</p>
		</form>
	);
};

export default SignIn;
