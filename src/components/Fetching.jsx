import React, { useEffect } from "react";
import { useStore } from "../lib/db-store";
import { useQuery } from "react-query";

function Fetching() {
  const addPlanets = useStore((state) => state.setPlanets);
  const planets = useStore((state) => state.planets);

  const fetchPlanets = async () => {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  };

  const { data: db, status } = useQuery("planets", fetchPlanets);

  if (status === "success") {
    addPlanets(...db.results);
  }

  return (
    <div>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {/* {db.results.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))} */}
        </div>
      )}
      {/* {status === "success" && db?.results.map((item) => addPlanets(item.name))} */}
    </div>
  );
}

export default Fetching;
