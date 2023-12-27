import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

import { IRegistrationBody } from "@/shared/interfaces/channel.interface";
import { validateEmail } from "@/shared/lib/validators/email.validator";
import { api } from "@/shared/model/root.api";
import styles from "@/shared/styles/AuthorizationForm.module.scss";
import { Button, Logo, PasswordField, TextField, TextLink } from "@/shared/ui";

const SignUp: React.FC = () => {
	const router = useRouter();
	const [registerMutation, { isLoading, isError }] = api.useRegisterMutation();

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
		setError,
		clearErrors,
		getValues
	} = useForm<IRegistrationBody>({ mode: "onChange" });

	const handleSignUp: SubmitHandler<IRegistrationBody> = credential => {
		if (isValid) {
			registerMutation(credential)
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
			onSubmit={handleSubmit(handleSignUp)}
		>
			<Logo
				className={styles.form__logo}
				withText={true}
			/>

			<div className={styles.form__fields}>
				<TextField
					{...register("name", {
						minLength: {
							value: 3,
							message: "Channel name can't be less than 3 symbols"
						},
						maxLength: {
							value: 35,
							message: "Channel name can't be larger than 35 symbols"
						},
						required: "Channel name is required"
					})}
					className={styles.form__field}
					icon={IoMdPerson}
					placeholder="Enter your Channel Name"
					autoComplete="new-off"
					error={errors.name?.message}
				/>

				<TextField
					{...register("email", {
						minLength: {
							value: 4,
							message: "Email can't be less than 4 symbols"
						},
						maxLength: {
							value: 60,
							message: "Email can't be larger than 60 symbols"
						},
						validate: value => validateEmail(value) || "Invalid email address",
						required: "Email is required"
					})}
					className={styles.form__field}
					icon={FaEnvelope}
					placeholder="Enter your Email"
					error={errors.email?.message}
				/>

				<PasswordField
					{...register("password", {
						minLength: {
							value: 12,
							message: "Password can't be less than 12 symbols"
						},
						maxLength: {
							value: 45,
							message: "Password can't be larger than 45 symbols"
						},
						validate: {
							matchesPasswordConfirmation: value => {
								const { password_confirmation } = getValues();
								if (value != password_confirmation) {
									setError("password_confirmation", {
										message: "Passwords don't match"
									});
									return true;
								}
								clearErrors("password_confirmation");
								return undefined;
							}
						},
						required: "Password is required"
					})}
					className={styles.form__field}
					error={errors.password?.message}
				/>

				<PasswordField
					{...register("password_confirmation", {
						validate: {
							matchesPassword: value => {
								const { password } = getValues();
								return value === password || "Passwords don't match";
							}
						},
						required: "Please repeat your password"
					})}
					className={styles.form__field}
					placeholder="Repeat your password"
					error={errors.password_confirmation?.message || errors.password?.message}
					preventErrorMessage={!Boolean(errors.password_confirmation?.message)}
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
				hint="Submit registration form"
				className={styles.form__button}
				kind="secondary"
				type="submit"
				disabled={isLoading && !isError}
			>
				{isLoading && !isError ? "Loading..." : "Sign Up"}
			</Button>

			<p className={styles.form__link}>
				{"Don't have an account? "}
				<TextLink href="/auth/sign-in">Sign in</TextLink>
			</p>
		</form>
	);
};

export default SignUp;
