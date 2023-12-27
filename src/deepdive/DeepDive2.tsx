import {useEffect, useState} from "react";

const Parent = () => {
    const [list, ] = useState([{
        title: 'abc',
    }, {
        title: 'b',
    }]);
    const [checkedList, ] = useState([{
        a: true,
        b: false
    }]);

    const [resultList, setResult] = useState<any>([])

    const util = ():Array<any> => {
        return list.map(list => ({list, checkedList: false}))
    }

    // useEffect(() => {
    //     setResult(util());
    // }, [list, checkedList])


    return <div>
        {util().map(reulst => <li>...</li>)}
    </div>
}
export default Parent