import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiPaperPlane } from "react-icons/bi";
import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from "react-icons/md";

import { IChannel } from "@/shared/interfaces/channel.interface";
import { validateEmail } from "@/shared/lib/validators/email.validator";
import { api } from "@/shared/model/root.api";
import styles from "@/shared/styles/AuthorizationForm.module.scss";
import { Button, TextField } from "@/shared/ui";

interface FormValues {
	email: IChannel["email"];
}

const Recovery: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
		reset
	} = useForm<FormValues>({ mode: "onSubmit" });

	const [createTicket, status] = api.useCreateTicketMutation();

	const handleRecovery: SubmitHandler<FormValues> = ({ email }) => {
		if (isValid) {
			createTicket(email)
				.unwrap()
				.then(() => reset());
		}
	};

	let indicator;

	if (status.isSuccess) {
		indicator = <MdOutlineMarkEmailRead />;
	}
	if (status.isLoading) {
		indicator = <BiPaperPlane className={styles.shaking} />;
	}
	if (!status.isLoading && !status.isSuccess) {
		indicator = <MdOutlineMailOutline />;
	}

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(handleRecovery)}
		>
			<h1 className={styles.form__logo}>{indicator}</h1>

			<div className={styles.form__fields}>
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
					placeholder="Email address"
					error={errors.email?.message}
				/>
			</div>

			<Button
				hint="Create recovery ticket"
				className={styles.form__button}
				kind="tertiary"
				type="submit"
				disabled={status.isLoading}
			>
				{status.isLoading ? "Creating your ticket..." : "Recover"}
			</Button>
		</form>
	);
};

export default Recovery;
