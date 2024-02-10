import { useState } from "react";
import "./App.css";

import Gameintro from "./components/Gameintro";
import Gameplay from "./components/Gameplay";

function App() {
  const [Nextpage, setNextpage] = useState(false);

  const Togglenextpage = () => {
    setNextpage((prev) => !prev);
  };

  return <>{Nextpage ? <Gameplay /> : <Gameintro toggle={Togglenextpage} />}</>;
}

export default App;
