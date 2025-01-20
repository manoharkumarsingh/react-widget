import React from "react";
import Code from "../../Code";
import accordionCode from "./accordionCode";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-cyan/theme.css";

const Accordion = () => {
  const data = [
    {
      label: "Section One",
      value:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedultrices sit amet mi eu suscipit. Etiam pretium est non ante accumsan, id rutrum libero porttitor. Aenean sed dignissim dui. Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncu congue sem et, volutpat accumsan mi. ",
    },
    {
      label: "Section Two",
      value:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedultrices sit amet mi eu suscipit. Etiam pretium est non ante accumsan, id rutrum libero porttitor. Aenean sed dignissim dui. Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncu congue sem et, volutpat accumsan mi. ",
    },
    {
      label: "Section Three",
      value:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedultrices sit amet mi eu suscipit. Etiam pretium est non ante accumsan, id rutrum }libero porttitor. Aenean sed dignissim dui. Fusce blandit non enim a suscipit. Morbi dolor libero, rhoncu congue sem et, volutpat accumsan mi. ",
    },
  ];
  const buttonClick = (e) => {
    /**Remove Class hidden if content next sibling */
    if (e.target.nextSibling.classList.contains("hidden")) {
      e.target.nextSibling.classList.remove("hidden");
    } else {
      e.target.nextSibling.classList.add("hidden");
    }
  };

  return (
    <div className="flex flex-col gap-10 p-10">
      <div>
        {data.map((item) => {
          return (
            <React.Fragment>
              <div className="mb-2">
                <div
                  className="cursor-pointer] cursor-pointer"
                  onClick={(e) => buttonClick(e)}
                >
                  {item.label}
                </div>
                <div className="text-sm bg-white hidden px-5 py-5 rounded">
                  {item.value}
                </div>
              </div>
              <hr></hr>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Code component={accordionCode} />
      </div>
    </div>
  );
};

export default Accordion;
