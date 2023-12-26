import {FC} from "react";
import Item from "../../interface/Item.ts";
import {css} from "@emotion/css";
import ContentsButton from "./button";
import ContentsEmpty from "./empty";

const EditorContents:FC<Item> = (props) => {
    const {contentsType} =props;


    const contentsTypeElem = () => {
        switch (contentsType) {
            case 'EMPTY':
                return <ContentsEmpty />
            case 'BUTTON':
                return <ContentsButton />
        }
    }



    console.log('contents : ', props.id);

    return <div className={css`
        width: 100%;
        height: 150px;
        background: red;
    `}>{contentsTypeElem()}</div>
}

export default EditorContents