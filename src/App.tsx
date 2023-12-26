import {useEffect, useState} from "react";
import Item from "./interface/Item.ts";
import {EDITOR_API_V1} from "../EDITOR_API_VER.tsx";
import EditorPage from "./components/page";
import {css} from "@emotion/css";

function App() {
  const [editor, setEditor] = useState<Item>(EDITOR_API_V1)

  useEffect(() => {
    (async () => {
      //fetching
      await setEditor(EDITOR_API_V1)
    })()
  }, []);

  return (
    <div className={css`
      width: 1024px;
      margin: 0 auto;
      background: ghostwhite;
    `}>
      <EditorPage {...editor} />
    </div>
  )
}

export default App
