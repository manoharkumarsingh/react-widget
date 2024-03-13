import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = (props) => {
  const [copyText, setCopyText] = useState("Copy");
  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(props.component)
        .then(() => {
          setCopyText("Copied!!");
          // Provide visual feedback to the user, e.g., change button text to 'Copied!'
        })
        .catch((error) => {
          // Handle any errors, e.g., display an error message
        });
    } else {
      // Provide an alternative method for copying the text to the clipboard
    }
  };
  return (
    <div className="w-[854px]">
      <button
        className="mt-[9px] absolute text-white pl-2"
        onClick={() => handleCopy()}
      >
        {copyText}
      </button>
      <SyntaxHighlighter className="rounded" language="jsx" style={tomorrow}>
        {props.component}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
