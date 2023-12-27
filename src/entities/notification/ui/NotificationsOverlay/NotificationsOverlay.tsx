import { animated, useTransition } from "@react-spring/web";
import React, { useMemo } from "react";

import { useStoreSelector } from "@/shared/lib/hooks";

import Notification from "../Notification";

import styles from "./NotificationsOverlay.module.scss";

const NotificationsOverlay = () => {
	const { notifications } = useStoreSelector(state => state.notifications);

	const refsMap = useMemo(() => new Map(), []);

	const transitions = useTransition(notifications, {
		from: { opacity: 0, height: 0, marginBottom: 20 },
		keys: notification => notification.id,
		enter: notification => async (next, cancel) => {
			const ref = refsMap.get(notification.id);

			if (!ref) return cancel();

			await next({ opacity: 1, height: ref.offsetHeight, marginBottom: 20 });
		},
		leave: notification => async next => {
			if (refsMap.has(notification.id)) {
				refsMap.delete(notification.id);
			}

			await next([{ opacity: 0 }, { height: 0, marginBottom: 0 }]);
		},
		trail: 200,
		config: {
			tension: 125,
			friction: 20,
			precision: 0.1
		}
	});

	return (
		<div className={styles.notifications}>
			{transitions((style, notification) => (
				<animated.div
					className={styles.notifications__notification}
					style={style}
					key={notification.id}
				>
					<Notification
						notification={notification}
						ref={node => refsMap.set(notification.id, node)}
					/>
				</animated.div>
			))}
		</div>
	);
};

export default NotificationsOverlay;
