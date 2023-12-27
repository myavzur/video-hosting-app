export const getApiErrorMessage = (error: any) => {
	if (error?.data?.message) {
		const message = error.data?.message;

		return typeof message !== "string" && message.length > 0 ? message[0] : message;
	}

	if (error?.message) return error.message;

	console.warn(
		`get-api-error-message.ts ~ line 20 ~ getApiErrorMessage ~ unhandled error: ${error}`
	);

	return "Something goes wrong.\nCheck console for more information.";
};
