import axios from "axios";

export const API_URL = `${process.env.CLIENT_URL}/api`;

export const API_HEADERS = {
	"Content-Type": "application/json"
};

export const rootAxios = axios.create({
	baseURL: API_URL,
	headers: API_HEADERS,
	withCredentials: true
});
