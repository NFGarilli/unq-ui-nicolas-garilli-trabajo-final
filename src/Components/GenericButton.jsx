import React from "react";

export default function GenericButton({handleFunction, text, className}) {
   return (
    <button
    className={className}
    onClick = {handleFunction}
  >
    {text}
  </button>
  )
}