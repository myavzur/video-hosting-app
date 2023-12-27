import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { API_HEADERS, API_URL } from "@/shared/api/root.base";
import { Namespaces } from "@/shared/constants/store.constants";
import {
	IChannel,
	ILoginBody,
	IRegistrationBody,
	SubscriptionResult
} from "@/shared/interfaces/channel.interface";

export const api = createApi({
	reducerPath: Namespaces.apiSlice,
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		headers: API_HEADERS,
		credentials: "include"
	}),
	tagTypes: ["Channel", "Video"],

	endpoints: builder => ({
		getMyChannel: builder.query<IChannel, void | null>({
			query: () => "/auth/me",
			providesTags: ["Channel"]
		}),

		login: builder.mutation<IChannel, ILoginBody>({
			query: credential => ({
				url: "/auth/login",
				method: "POST",
				body: credential
			}),
			invalidatesTags: ["Channel"]
		}),

		register: builder.mutation<IChannel, IRegistrationBody>({
			query: credential => ({
				url: "/auth/register",
				method: "POST",
				body: credential
			}),
			invalidatesTags: ["Channel"]
		}),

		logout: builder.mutation<null, void>({
			query: () => ({
				url: "/auth/logout",
				method: "POST"
			}),
			invalidatesTags: ["Channel"]
		}),

		subscribe: builder.mutation<{ result: SubscriptionResult }, IChannel["id"]>({
			query: channelId => ({
				url: `/channels/subscribe/${channelId}`,
				method: "PATCH"
			}),
			invalidatesTags: ["Channel"]
		}),

		// Password recovery
		createTicket: builder.mutation<null, IChannel["email"]>({
			query: email => ({
				url: "/recovery/create-ticket",
				method: "POST",
				body: { email }
			})
		}),

		verifyTicket: builder.query<{ recoveryForEmail?: string }, null>({
			query: () => ({
				url: "/recovery/verify-ticket"
			})
		}),

		updatePassword: builder.mutation<
			null,
			{ password: string; passwordConfirmation: string }
		>({
			query: email => ({
				url: "/recovery/update-password",
				method: "PATCH",
				body: { email }
			})
		})
	})
});
