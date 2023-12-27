import { IComment, ICreateCommentBody } from "@/shared/interfaces/comment.interface";
import { api } from "@/shared/model/root.api";

export const commentApi = api.injectEndpoints({
	endpoints: builder => ({
		createComment: builder.mutation<IComment, ICreateCommentBody>({
			query: comment => ({
				url: "/comments",
				method: "POST",
				body: comment
			}),
			// ? Refresh video (refetch it from server)
			invalidatesTags: (result, error, comment) => {
				return [{ type: "Video", id: comment.videoId }];
			}
		})
	})
});
