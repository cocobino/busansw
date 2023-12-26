import {useEffect, useState} from "react";

const Parent = () => {
    const [list, ] = useState([{
        title: 'a',
    }, {
        title: 'b',
    }]);
    const [checkedList, ] = useState([{
        a: false,
        b: false
    }]);

    const [, setResult] = useState<any>([])

    const util = ():Array<any> => {
        return list.map(list => ({list, checkedList: false}))
    }

    useEffect(() => {
        setResult(util());
    }, [list, checkedList])


    return <div></div>
}
export default Parent