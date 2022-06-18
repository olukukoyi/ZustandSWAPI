import React from "react";
import { counterStore } from "../lib/counter";

function Counter() {
  const count = counterStore((state) => state.count);
  const inc = counterStore((state) => state.inc);
  const dec = counterStore((state) => state.dec);
  return (
    <div>
      {count}
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default Counter;
