import React from "react";
import { firstBook } from "./datamain";
export default function Length() {
  var result = firstBook.length;
  return (
    <div>
      <h4> {result} </h4>
    </div>
  );
}
