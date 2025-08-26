/* eslint-disable @typescript-eslint/ban-ts-comment */

export type EVENT_CATEGORY = "interaction";

export type EVENT_NAME =
  | "start_conversation"
  | "send_message"
  | "complete_onboarding"
  | `end_conversation`
  | `error_api_call`
  | `${"english"| "bahasa"}_lang`;

export const initialize = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  // @ts-expect-error
  gtag("js", new Date());
  // @ts-expect-error
  gtag("config", "G-MSH2Z60CEK");
};

export const trackCustomEvent = (
  eventName: EVENT_NAME,
  eventParams: Record<string, unknown> = {}
) => {
  if (typeof window.gtag === "undefined") {
    console.warn("GA isn't initalized yet");
  }
  const enhancedParams = {
    event_category: 'interaction', // Standard GA4 parameter
    ...eventParams
  };

  window.gtag("event", eventName, enhancedParams);
};
