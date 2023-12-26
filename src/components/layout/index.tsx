import {FC} from "react";
import Item from "../../interface/Item.ts";
import EditorBlock from "../block";

const EditorLayout:FC<Item> = (props) => {

    const {childrenItem} = props;

    console.log('layout : ', props.id)

    return <div>
        {childrenItem.map(item => <EditorBlock key={item.id} {...item} />)}
    </div>
}

export default EditorLayout