import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import { Menu } from "@/features/menu";

import { ChannelCard } from "@/entities/channel";

import { BRAND_NAME } from "@/shared/constants/brand.constants";
import { useOutside } from "@/shared/lib/hooks";
import { api } from "@/shared/model/root.api";
import { ButtonIcon, Divider, Logo } from "@/shared/ui";

import { menu } from "../../mock/menu";

import { SidebarProps } from "./Sidebar.interface";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC<SidebarProps> = ({ onCloseSidebar, className }) => {
	const { data: channel } = api.useGetMyChannelQuery();

	const [sidebarRef] = useOutside({ onDisappear: onCloseSidebar });

	return (
		<aside
			ref={sidebarRef}
			className={classNames(styles.sidebar, className)}
		>
			<div className={styles.sidebar__heading}>
				<ButtonIcon
					hint="Close sidebar"
					onClick={onCloseSidebar}
				>
					<RxHamburgerMenu />
				</ButtonIcon>

				<Logo
					className={styles["sidebar__heading-logo"]}
					withText={true}
				/>
			</div>

			<Divider className={styles.sidebar__divider} />

			<Menu
				title="Menu"
				links={menu}
			/>

			<Divider className={styles.sidebar__divider} />

			{channel &&
				channel.subscriptions?.length > 0 &&
				channel.subscriptions.map(({ toChannel }) => {
					return (
						<Link
							href={`/channels/${toChannel.id}`}
							key={toChannel.id}
						>
							<a>
								<ChannelCard
									channel={toChannel}
									size="sm"
								/>
							</a>
						</Link>
					);
				})}

			<div className={styles.sidebar__copyright}>
				© 2022 {BRAND_NAME} by HandsUp! (myavzur)
			</div>
		</aside>
	);
};

export default Sidebar;
