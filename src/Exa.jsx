import React from "react";
import { useRef, useState } from "react";

const Exa = () => {
  const inputRef = useRef(null);
  // const handleSubmit = () => {
  //   const inputEl = document.getElementById("myInput");

  //   const value = inputEl.value;
  //   console.log(value);
  // };

  const handleSubmit = () => {
    const value = inputRef.current.value;
    console.log(value);
  };

  return (
    <>
      <input ref={inputRef} id="myInput" type="text" />
      <button onClick={handleSubmit}>Focus</button>
    </>
  );
};

export default Exa;
