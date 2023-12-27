import Studio from "@/screens/Studio";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const StudioPage: NextPageAuth = () => {
	return <Studio />;
};

StudioPage.isPrivate = true;

export default StudioPage;
