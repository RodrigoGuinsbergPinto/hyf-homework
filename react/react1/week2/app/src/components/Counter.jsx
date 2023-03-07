import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [count]);

  return <div>You have used {count} seconds on this website.</div>;
}

export default Counter;
