"use client";

import { useState } from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  const isNow = "I KNOW YOU WANT!";
  const yesText = "yay yay yay yay";
  const noText = "ohh nooo... :(";
  const noText2 = "okk.. let's start again...";

  const initTextChanges = (): void => {
    setTextContent([noText, noText2, isNow]);
    setTimeout(() => {
      setVisibility(false);
      setAdditionalClass("is-big");
    }, 2000);
  };

  const initQuestionButton = (direction: boolean): void => {
    direction ? setTextContent([yesText]) : initTextChanges();
  };

  const [textContent, setTextContent] = useState<string[]>([
    "Will you be my valentine?",
  ]);
  const [isVisible, setVisibility] = useState<boolean>(true);
  const [additionalClass, setAdditionalClass] = useState<string>("");

  return (
    <div className="content-holder">
      <div className="title-holder">
        <h1>Valentine&apos;s Day 💞</h1>
      </div>
      <div className="content">
        <p className="content-text">
          <ReactTyped strings={textContent} typeSpeed={90} />
        </p>
        <div className="content-image"></div>
      </div>
      <div className="buttons-holder">
        <div
          onClick={() => initQuestionButton(true)}
          className={`buttons-button ${additionalClass}`}
        >
          TAK
        </div>
        <div
          hidden={!isVisible}
          onClick={() => initQuestionButton(false)}
          className="buttons-button"
        >
          NIE
        </div>
      </div>
    </div>
  );
}
