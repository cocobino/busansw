import {FC, useEffect, useState} from "react";

const TextList = () => {
    const [select, setSelect] = useState(0)

    return <div>
        <Focus select={select} />
    </div>
}

const Focus: FC<{ select: number; }> = ({focus}) => {
    const [init, setInit] = useState(true)

    useEffect(() => {
        setInit(false)
    }, [focus])

    return null;

}


export default TextList