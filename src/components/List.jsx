import React, { useState } from "react";
import { listStore } from "../lib/list";

function List() {
  const list = listStore((state) => state.users);
  const add = listStore((state) => state.addUser);
  const [user, setUser] = useState("");
  console.log(list);
  return (
    <div>
      {list.map((user) => (
        <h1>{user}</h1>
      ))}
      <input
        placeholder="User"
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button onClick={() => add(user)}>Add</button>
    </div>
  );
}

export default List;
