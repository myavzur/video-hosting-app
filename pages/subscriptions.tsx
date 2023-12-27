import Subscriptions from "@/screens/Subscriptions";

import { NextPageAuth } from "@/shared/interfaces/next-page-auth.interface";

const SubscriptionsPage: NextPageAuth = () => {
	return <Subscriptions />;
};

SubscriptionsPage.isPrivate = true;

export default SubscriptionsPage;
