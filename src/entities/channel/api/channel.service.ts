import { rootAxios } from "@/shared/api/root.base";
import { IChannel } from "@/shared/interfaces/channel.interface";

export class ChannelService {
	async getAll() {
		return await rootAxios.get<IChannel[]>("/channels");
	}

	async getChannel(id: IChannel["id"]) {
		return await rootAxios.get<IChannel>(`/channels/id/${id}`);
	}
}
