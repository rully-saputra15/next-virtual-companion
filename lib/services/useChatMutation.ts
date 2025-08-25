import { useMutation } from "@tanstack/react-query";
import api from '../api';
import { ChatApiParams, TChatAPIResponse } from '../types/common';
import { stripHtml } from "../utils";

const useChatMutation = () => useMutation({
    mutationFn: async (payload: ChatApiParams):Promise<TChatAPIResponse> => {
        const res = await api.startChat(payload);
        const jsonData: TChatAPIResponse = await res.json();
        const cleanMessage = stripHtml(jsonData.message)
        if(!res.ok) {
            throw new Error(res.statusText)
        }
        return {
            ...jsonData,
            message: cleanMessage
        }
    }
})

export default useChatMutation