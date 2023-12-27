import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { api } from "@/shared/model/root.api";

import { MenuLinkProps } from "./MenuLink.interface";
import styles from "./MenuLink.module.scss";

const MenuLink: React.FC<MenuLinkProps> = ({ link }) => {
	const { data: channel, error: channelError } = api.useGetMyChannelQuery();
	const router = useRouter();

	//  * For /channels/me
	let isMustBeActive = false;

	if (link.isPrivate && (!channel || channelError)) {
		return null;
	}

	if (link.path === "/channels/me" && channel) {
		link.path = `/channels/${channel.id}`;
		isMustBeActive = true;
	}

	return (
		<Link href={link.path}>
			<a
				className={cn(styles.link, {
					[styles["link--active"]]: router.asPath === link.path || isMustBeActive
				})}
			>
				<div
					className={cn(styles.link__content, {
						[styles["link__content--image"]]: Boolean(link.image)
					})}
				>
					{link.icon && <link.icon />}
				</div>

				<p className={styles.link__title}>{link.title}</p>
			</a>
		</Link>
	);
};

export default MenuLink;
