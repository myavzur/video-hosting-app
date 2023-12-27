import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";

dayjs.extend(durationPlugin);

export const getDuration = (seconds: number) => {
	const duration = dayjs.duration(seconds, "seconds");

	if (duration.asHours() >= 1) {
		return duration.format("H:mm:ss");
	}

	return duration.format("m:ss");
};
