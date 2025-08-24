"use client";

import React from "react";
import useLoading, { LOADING_EMOJIS } from "./useLoading";

const Loading = () => {
  const { containerRef } = useLoading();
  return (
    <section
      className="flex justify-center items-center gap-4 h-dvh"
      ref={containerRef}
    >
      {LOADING_EMOJIS.map((el, index) => (
        <span key={index} className={`text-4xl item-${index}`}>
          {el}
        </span>
      ))}
    </section>
  );
};

export default Loading;
