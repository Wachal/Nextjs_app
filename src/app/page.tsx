"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const question = "Will you be my valentine?";
  const iNow = "I KNOW YOU WANT!";
  const yesText = "jej jej jej jej, wygrałaś randkę";
  const noText = "ejjjj nooo... :(";
  const noText2 = "dobra jeszcze raz...";

  const yesButtonInit = () => {
    setTextContent(question);
  };

  const [textContent, setTextContent] = useState<string>(
    "Will you be my valentine?",
  );

  useEffect(() => {}, [textContent]);

  return (
    <div className="content-holder">
      <div className="title-holder">
        <h1>Valentine&apos;s day 💞</h1>
      </div>
      <div className="content">
        <p className="content-text">{textContent}</p>
      </div>
      <div className="buttons-holder">
        <div onClick={yesButtonInit} className="buttons-button">
          TAK
        </div>
        <div className="buttons-button">NIE</div>
      </div>
    </div>
  );
}
