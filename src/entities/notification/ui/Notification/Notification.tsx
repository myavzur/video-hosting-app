import cn from "classnames";
import React, { forwardRef, useCallback, useEffect } from "react";

import { useStoreDispatch } from "@/shared/lib/hooks";

import { notificationsModel } from "../../model";

import { NotificationProps } from "./Notification.interface";
import styles from "./Notification.module.scss";

const Notification = forwardRef<HTMLDivElement, NotificationProps>(
	({ notification }, ref) => {
		const dispatch = useStoreDispatch();

		const handleDelete = useCallback(
			(id: string) => {
				dispatch(notificationsModel.deleteNotification(id));
			},
			[dispatch]
		);

		useEffect(() => {
			const timeout = setTimeout(() => {
				handleDelete(notification.id);
			}, notification.timer);

			return () => clearTimeout(timeout);
		}, [handleDelete, notification]);

		return (
			<div
				ref={ref}
				className={cn(styles.notification, {
					[styles[`notification--${notification.type}`]]: Boolean(notification.type)
				})}
				onClick={() => handleDelete(notification.id)}
			>
				<div
					className={styles.notification__timer}
					style={
						{
							"--duration": `${notification.timer / 1000}s`
						} as React.CSSProperties
					}
				/>

				<p className={styles.notification__body}>{notification.message}</p>
			</div>
		);
	}
);

Notification.displayName = "Notification";

export default Notification;
