import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      {/* Your count logic here */}
    </div>
  );
};

export default App;
