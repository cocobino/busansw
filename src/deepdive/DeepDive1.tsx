import {FC, useEffect, useState} from "react";

const Parent = () => {
    const [state, setState] = useState(false);
    const [updateState, setUpdateState] = useState(false);

    useEffect(() => {
        setUpdateState(true)
    }, [state]);


    return <div>
        <Children setState={setState}/>

        updateState : {updateState}
    </div>
}

interface Props {
    setState: (v: boolean) => void;
}

const Children: FC<Props> = ({setState}) => {

    return <div onClick={() => setState(true)}>
        스테이트업데이트
    </div>;
}


export default Parent