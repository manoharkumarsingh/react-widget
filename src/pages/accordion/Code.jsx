import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const component = `
import React from "react";
const Accordion = () => {
  const data = [
    // ... your data array here ...
  ];

  const buttonClick = (e) => {
    // ... your buttonClick function here ...
  };

  return (
    <div className="m-[50px]">
      {data.map((item) => {
        return (
          <React.Fragment>
            <div className="mb-2">
              <div
                className="cursor-pointer w-[800px]"
                onClick={(e) => buttonClick(e)}
              >
                {item.label}
              </div>
              <div className="text-sm bg-white p-4 hidden w-[800px]">
                {item.value}
              </div>
            </div>
            <hr></hr>
          </React.Fragment>
        );
      })}
    </div>
  );
};
`;

const Code = () => {
  return (
    <div className="w-[90%]">
      <SyntaxHighlighter className="rounded" language="jsx" style={tomorrow}>
        {component}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
