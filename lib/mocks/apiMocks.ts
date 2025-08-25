// Mock response data
const mockResponseData = {
    "status": "success",
    "statusCode": 200,
    "message": "<p class=\"response-text\">I'm here to hear you out. 😊</p>"
};

// Create a properly typed fetch mock that returns a Response
export const virtualFriendApiMock: Promise<Response> = new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
        const responseInit: ResponseInit = {
            status: 200,
            statusText: 'OK',
            headers: {
                'content-type': 'application/json'
            }
        };
        
        const response = new Response(JSON.stringify(mockResponseData), responseInit);
        resolve(response);
    }, 500); // 500ms delay to simulate network
});