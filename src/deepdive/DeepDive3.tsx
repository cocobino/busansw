import {FC, useEffect, useState} from "react";

const TextList = () => {
    const [select, setSelect] = useState(0)

    return <div>
        <Focus key={select}  select={select} />
    </div>
}

const Focus: FC<{ select: number; }> =
    ({select}) => {
    const [init, setInit] =
        useState('')

    // useEffect(() => {
    //     setInit(true)
    // }, [select])

    return null;

}


export default TextList