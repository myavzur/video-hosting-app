import { NextPageAuth } from "@/types/next-page-auth.interface";

export interface PageAuthProviderProps {
	Component: NextPageAuth;
	children: React.ReactNode;
}
