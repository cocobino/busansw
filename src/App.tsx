import './App.css'
import {useEffect, useState} from "react";
import Item from "./interface/Item.ts";
import {EDITOR_API_V1} from "../EDITOR_API_VER.tsx";

function App() {
  const [editor, setEditor] = useState<Item>(EDITOR_API_V1)

  useEffect(() => {
    (async () => {
      //fetching
      await setEditor(EDITOR_API_V1)
    })()
  }, []);

  return (
    <div></div>
  )
}

export default App
