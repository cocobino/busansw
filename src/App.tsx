import {useEffect, useState} from "react";
import Item from "./interface/Item.ts";
import {EDITOR_API_V1} from "../EDITOR_API_VER.tsx";
import EditorPage from "./components/page";

function App() {
  const [editor, setEditor] = useState<Item>(EDITOR_API_V1)

  useEffect(() => {
    (async () => {
      //fetching
      await setEditor(EDITOR_API_V1)
    })()
  }, []);

  return (
    <div>
      <EditorPage {...editor} />
    </div>
  )
}

export default App
