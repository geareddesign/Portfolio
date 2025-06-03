import { useState } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;
