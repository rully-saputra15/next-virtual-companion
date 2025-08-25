export type Role = 'user' | 'model'

export type ChatHistory = {
  role: "user" | "model";
  parts: Array<{ text: string }>;
};

export type ChatApiParams = {
  newMessage: string;
  history: Array<ChatHistory>;
};

export type ApiResponse<T> = {
    status: string;
    statusCode: number;
    message: T
}

export type Phase = 'intro' | 'conversation' | 'end';
export type TChat = {
    message: string
    phase: Phase
}

export type TChatAPIResponse = ApiResponse<string>;