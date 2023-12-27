import { rootAxios } from "@/shared/api/root.base";
import { IVideo } from "@/shared/interfaces/video.interface";

export class VideoService {
	async getAll() {
		return await rootAxios.get<IVideo[]>("/videos");
	}

	async getVideo(id: IVideo["id"]) {
		return await rootAxios.get<IVideo[]>(`/videos/id/${id}`);
	}

	async getMostPopular() {
		return await rootAxios.get<IVideo[]>("/videos/most-popular");
	}
}
