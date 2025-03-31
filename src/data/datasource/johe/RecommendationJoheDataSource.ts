import {RecommendationDataSource} from "@/data/datasource/RecommendationDataSource.ts";
import axios from "axios";
import {AxiosRequestConfig} from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL + "/product-recommendation";

export class RecommendationJoheDataSource implements RecommendationDataSource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformResponse: [function (response) {
            let resp

            try {
                resp = JSON.parse(response)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if(resp) {
                return resp
            }
        }],
    });

    async purchase(uid: string, data: string[]): Promise<string[]> {
        try {
            const response = await this.axiosInstance({
                method: "POST",
                url: `/${uid}`,
                params: {
                    state_id: uid
                },
                data: data
            } as AxiosRequestConfig);

            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }

    async read(uid: string): Promise<string[]> {
        try {
            const response = await this.axiosInstance({
                method: "GET",
                url: `/${uid}`,
                params: {
                    state_id: uid
                }
            } as AxiosRequestConfig);

            console.log(response);
            return response.data;
        } catch (e) {
            console.log(e);
        }
    }
}