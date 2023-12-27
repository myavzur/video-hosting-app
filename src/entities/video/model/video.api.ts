import {
	ICreateDraftVideoBody,
	IUpdateVideoBody,
	IVideo
} from "@/shared/interfaces/video.interface";
import { api } from "@/shared/model/root.api";

export const videoApi = api.injectEndpoints({
	endpoints: builder => ({
		getVideoByTerm: builder.query<IVideo[], string>({
			query: term => ({ url: "/videos/search", params: { term } })
		}),

		getVideoById: builder.query<IVideo, IVideo["id"]>({
			query: videoId => ({ url: `/videos/id/${videoId}` }),
			providesTags: (result, error, id) => [{ type: "Video", id }]
		}),

		createDraftVideo: builder.mutation<IVideo, ICreateDraftVideoBody>({
			query: video => ({
				url: "/videos",
				method: "POST",
				body: video
			}),

			// ? Refresh my channel with new videos
			invalidatesTags: ["Channel"]
		}),

		updateVideo: builder.mutation<IVideo, IUpdateVideoBody>({
			query: ({ id, ...video }) => ({
				url: `/videos/id/${id}`,
				method: "PATCH",
				body: video
			}),

			// ? Refresh channel.videos and update current video
			invalidatesTags: (result, error, { id }) => [
				{ type: "Video", id },
				{ type: "Channel" }
			]
		}),

		deleteVideo: builder.mutation<null, IVideo["id"]>({
			query: videoId => ({
				url: `/videos/id/${videoId}`,
				method: "DELETE"
			}),

			invalidatesTags: ["Channel"]
		}),

		updateViews: builder.mutation<null, IVideo["id"]>({
			query: videoId => ({
				url: `/videos/views/${videoId}`,
				method: "PUT"
			}),

			// ? Refresh views on this video
			invalidatesTags: (result, error, videoId) => [{ type: "Video", id: videoId }]
		}),

		updateLikes: builder.mutation<null, IVideo["id"]>({
			query: videoId => ({
				url: `/videos/likes/${videoId}`,
				method: "PUT"
			}),

			// ? Refresh likes on this video
			invalidatesTags: (result, error, videoId) => [{ type: "Video", id: videoId }]
		})
	})
});
