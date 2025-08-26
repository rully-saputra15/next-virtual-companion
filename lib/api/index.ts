import { ChatApiParams } from "../types/common";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API;

const api = {
  startChat: (payload: ChatApiParams) => {
    return fetch(`${BASE_URL}/v1/virtual-friend`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        data: payload,
      }),
    });
      // return virtualFriendApiMock
  },
};

export default api;
