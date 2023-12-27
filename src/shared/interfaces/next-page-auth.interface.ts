import { NextPage } from "next";

export type NextPageAuth<PageProps = object> = NextPage<PageProps> & {
	isPrivate?: boolean;
};
