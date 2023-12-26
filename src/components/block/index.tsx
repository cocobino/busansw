import {FC} from "react";
import Item from "../../interface/Item.ts";
import EditorGroup from "../group";

const EditorBlock: FC<Item> = (props) => {
    const {childrenItem} = props;

    console.log('block : ', props.id)

    return <div>
        {childrenItem.map(item => <EditorGroup key={item.id} {...item}/>)}
    </div>
}

export default EditorBlock