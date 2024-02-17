"use client";

import { useState } from "react";
import { ReactTyped } from "react-typed";
import texts from "../components/texts";

export default function Home() {
  const [textContent, setTextContent] = useState<string[]>([texts.question]);
  const [isVisible, setVisibility] = useState<boolean>(true);
  const [additionalClass, setAdditionalClass] = useState<string>("");

  const initTextChanges = (): void => {
    setTextContent([texts.noText, texts.noText2, texts.isNow, texts.question]);
    setTimeout(() => {
      setVisibility(false);
      setAdditionalClass("is-big");
    }, 2000);
  };

  const initQuestionButton = (direction: boolean): void => {
    direction ? setTextContent([texts.yesText]) : initTextChanges();
  };

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
          YES
        </div>
        <div
          hidden={!isVisible}
          onClick={() => initQuestionButton(false)}
          className="buttons-button"
        >
          NO
        </div>
      </div>
    </div>
  );
}
