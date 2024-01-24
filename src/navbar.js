import { useEffect, useState } from "react";

function Navbar({ length, symbol }) {
  let [value, setValue] = useState(Array(5-length).fill(symbol));

  useEffect(() => {
    setValue(Array(5-length).fill(symbol));
  }, [length, symbol]);

  return <div className="navbar">{value.join(" ")}</div>;
}

export default Navbar;
