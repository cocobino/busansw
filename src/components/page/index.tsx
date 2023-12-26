import {FC} from "react";
import Item from "../../interface/Item.ts";
import EditorLayout from "../layout";


const EditorPage: FC<Item> = (props) => {
    const {childrenItem} = props;

    console.log('page : ', props.id)

    return (<div>
        {childrenItem.map(item => <EditorLayout key={item.id} {...item} />)}
    </div>)
}


export default EditorPage