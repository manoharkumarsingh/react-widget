import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

const component = `
import React, { useState } from "react";
const Tab = () => {
  const [tab, setTab] = useState("tab1");
  const handleTabClick = (tab) => {
    setTab(tab);
  };
  return (
    <div className="m-[50px]">
      <div className="flex gap-4 mb-4">
        <div
          className={
            tab == "tab1"
              ? "border-solid border-2 cursor-pointer border-indigo-600 pl-4 pr-4 pb-2 pt-2  border-t-0 border-l-0 border-r-0 border-b-1"
              : "pl-4 pr-4 pb-2 pt-2 cursor-pointer"
          }
          onClick={() => handleTabClick("tab1")}
        >
          Tab1
        </div>
        <div
          className={
            tab == "tab2"
              ? "border-solid border-2 cursor-pointer border-indigo-600 pl-4 pr-4 pb-2 pt-2  border-t-0 border-l-0 border-r-0 border-b-1"
              : "pl-4 pr-4 pb-2 pt-2 cursor-pointer"
          }
          onClick={() => handleTabClick("tab2")}
        >
          Tab2
        </div>
        <div
          className={
            tab == "tab3"
              ? "border-solid border-2 cursor-pointer border-indigo-600 pl-4 pr-4 pb-2 pt-2  border-t-0 border-l-0 border-r-0 border-b-1"
              : "pl-4 pr-4 pb-2 pt-2 cursor-pointer"
          }
          onClick={() => handleTabClick("tab3")}
        >
          Tab3
        </div>
      </div>

      {tab === "tab1" && (
        <div className="tab1 bg-white p-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices sit amet mi eu suscipit. Etiam pretium est non ante
            accumsan, id rutrum libero porttitor. Aenean sed dignissim dui.
            Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncus
            congue sem et, volutpat accumsan mi. Mauris lacus dui, venenatis id
            posuere sit amet, tempus et sem. Phasellus pharetra euismod dolor
            feugiat scelerisque. Aliquam gravida maximus imperdiet.
          </p>
        </div>
      )}

      {tab === "tab2" && (
        <div className="tab2  bg-white  p-10">
          <p>
            Tab2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices sit amet mi eu suscipit. Etiam pretium est non ante
            accumsan, id rutrum libero porttitor. Aenean sed dignissim dui.
            Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncus
            congue sem et, volutpat accumsan mi. Mauris lacus dui, venenatis id
            posuere sit amet, tempus et sem. Phasellus pharetra euismod dolor
            feugiat scelerisque. Aliquam gravida maximus imperdiet.
          </p>
        </div>
      )}

      {tab === "tab3" && (
        <div className="tab3  bg-white  p-10">
          <p>
            Tab3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ultrices sit amet mi eu suscipit. Etiam pretium est non ante
            accumsan, id rutrum libero porttitor. Aenean sed dignissim dui.
            Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncus
            congue sem et, volutpat accumsan mi. Mauris lacus dui, venenatis id
            posuere sit amet, tempus et sem. Phasellus pharetra euismod dolor
            feugiat scelerisque. Aliquam gravida maximus imperdiet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Tab;
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
