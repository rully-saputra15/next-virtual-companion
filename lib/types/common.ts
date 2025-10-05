export type Role = 'user' | 'model'
export type Nullable<T> = T | null
export type ChatHistory = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

export type ChatApiParams = {
  newMessage: string;
  history: Array<ChatHistory>;
};

export type TChatResponseData = {
  message: string;
  cta: Nullable<{
    text: string,
    link: string
  }>
}

export type ApiResponse<T> = {
    status: string;
    statusCode: number;
    data: T
}

export type Phase = 'intro' | 'conversation' | 'end';
export type TChat = {
    message: string
    phase: Phase
}

export type TChatAPIResponse = ApiResponse<TChatResponseData>;