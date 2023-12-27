import { useCallback, useState } from "react";

import { API_URL } from "@/shared/api/root.base";

interface UseUploadFileParams {
	/** Specifies name of the field in formData. Default: "file" */
	name?: string;
	url: string;
}

interface UseUploadFileStatusState<ResponseType extends object> {
	data: ResponseType | null;
	progress: number;
	isLoading: boolean;
	isError: boolean;
	isSuccess: boolean;
	error: string | null;
}

type UseUploadFileResult<ResponseType extends object> = [
	upload: (formData: FormData) => Promise<{
		originalName: string;
		duration: number | null;
		outputName: string;
		path: string;
	}>,
	status: UseUploadFileStatusState<ResponseType>
];

export const useUploadFile = <ResponseType extends object>(
	params: UseUploadFileParams
): UseUploadFileResult<ResponseType> => {
	const [status, setStatus] = useState<UseUploadFileStatusState<ResponseType>>({
		progress: 0,
		data: null,
		isLoading: false,
		isError: false,
		isSuccess: false,
		error: null
	});

	const upload = useCallback(
		async (formData: FormData): Promise<any> => {
			setStatus({
				progress: 0,
				data: null,
				isLoading: true,
				isError: false,
				isSuccess: false,
				error: null
			});

			return new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();

				// Include cookies, authorization header.
				xhr.withCredentials = true;

				xhr.upload.addEventListener("progress", e => {
					if (e.lengthComputable) {
						setStatus(status => ({
							...status,
							progress: Math.round((e.loaded / e.total) * 100)
						}));
					}
				});

				xhr.addEventListener("load", () => {
					if (xhr.status >= 200 && xhr.status < 300) {
						const data = JSON.parse(xhr.response);

						setStatus(status => ({
							...status,
							isLoading: false,
							isSuccess: true,
							isError: false,
							error: null,
							data,
							progress: 100
						}));

						resolve(data);
					} else {
						setStatus(status => ({
							...status,
							isLoading: false,
							isSuccess: false,
							isError: true,
							error: xhr.responseText,
							data: null,
							progress: 0
						}));
					}
				});

				xhr.addEventListener("error", () => {
					setStatus(status => ({
						...status,
						isLoading: false,
						isSuccess: false,
						isError: true,
						error: xhr.statusText,
						data: null
					}));

					reject(xhr.statusText);
				});

				xhr.open("POST", API_URL + params.url);
				xhr.send(formData);
			});
		},
		[params.url]
	);

	return [upload, status];
};
