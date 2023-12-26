import {FC} from "react";
import Item from "../../interface/Item.ts";
import {css} from "@emotion/css";
import ContentsButton from "./button";
import ContentsEmpty from "./empty";
import ContentsAdd from "./add";

const EditorContents:FC<Item> = (props) => {
    const {contentsType} =props;


    const contentsTypeElem = () => {
        switch (contentsType) {
            case 'EMPTY':
                return <ContentsEmpty />
            case 'BUTTON':
                return <ContentsButton />
            case 'ADD':
                return <ContentsAdd />
        }
    }



    console.log('contents : ', props.id);

    return <div className={css`
        width: 100%;
        background: red;
    `}>{contentsTypeElem()}</div>
}

export default EditorContents