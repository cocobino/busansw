import {useEffect, useState} from "react";

const DeepDive4 = () => {
    const [one, setOne] = useState(false);
    const [two, setTwo] = useState(false)
    useEffect(() => {
        setTwo(true)
    }, [one]);
    useEffect(() => {
        setOne(false);
        setTwo(false)

    } , [one, two])


    return <div onClick={() => {
        setOne(true)
        setTwo(true)
    }}></div>
}

export default DeepDive4