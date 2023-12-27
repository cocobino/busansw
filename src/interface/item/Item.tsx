interface Item {
    id: string;
    childrenItem: Item[];
    parentId?:string;
    contentsType?:string;
    type: 'CONTENTS' | 'GROUP' | 'LAYOUT' |'PAGE' | 'BLOCK'
}

export default Item