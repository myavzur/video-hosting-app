import { IChannel } from "@/shared/interfaces/channel.interface";
import { ButtonProps } from "@/shared/ui/Button/Button.interface";

export interface ButtonSubscribeProps extends Omit<ButtonProps, "hint"> {
	toChannelId: IChannel["id"];
}
