import {FC} from "react";
import Item from "../../interface/Item.ts";
import EditorContents from "../contents";

const EditorGroup:FC<Item> = (props) => {
    const {childrenItem} = props;

    console.log('group : ', props.id)

    return <div>
        {childrenItem.map(item => <EditorContents key={item.id} {...item} />)}
    </div>
}

export default EditorGroup;