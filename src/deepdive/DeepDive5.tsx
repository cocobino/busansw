import {FC, useEffect, useState} from "react";


const Parent = () => {

    return [1, 2, 3, 4].map(number =>
        <FetchingChildComponent value={number}/>)
}
const FetchingChildComponent: FC<{
    value: number;
}> = (value) => {
    const [list, setList] = useState([])
    const [load, setLoad] = useState(false);


    useEffect(() => {
        let ignore = false;

        if (!ignore) {
        (async () => {

            const {data} = await fetch(`/busan/sw?key=${value}`);
            setList(data)
        })()
        }
        return () => {
            ignore = true
        }
    }, [value])

    if (load) return <div>...load</div>


    return <div></div>
}

export default Parent