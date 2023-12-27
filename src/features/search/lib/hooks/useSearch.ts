import { ChangeEvent, useState } from "react";

import { videoApi } from "@/entities/video/model/video.api";

import { useDebounce } from "@/shared/lib/hooks";

export const useSearch = (delayBeforeRequest: number) => {
	const [term, setTerm] = useState("");
	const termDebounced = useDebounce(term, delayBeforeRequest);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const response = videoApi.useGetVideoByTermQuery(termDebounced, {
		skip: !termDebounced,
		selectFromResult: ({ data, ...rest }) => ({
			data: data?.slice(0, 4),
			...rest
		})
	});

	return { handleSearch, term, termDebounced, response };
};
