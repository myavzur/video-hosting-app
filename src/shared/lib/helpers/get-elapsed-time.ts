import dayjs from "dayjs";
import relativeTimePlugin from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTimePlugin);

export const getElapsedTime = (date: string) => {
	return dayjs(new Date(date)).fromNow();
};
