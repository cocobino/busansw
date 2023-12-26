import {FC} from "react";
import Item from "../../interface/Item.ts";

const EditorContents:FC<Item> = (props) => {
    const {contentsType} =props;


    console.log('contents : ', props.id)

    return <div></div>
}

export default EditorContents