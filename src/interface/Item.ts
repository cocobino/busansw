export type pageIdType = `page_${string}`;
export type layoutIdType = `layout_${string}`;
export type blockIdType = `block_${string}`;
export type groupIdType = `group_${string}`;
export type contentsIdType = `contents_${string}`;

interface Item {
    id: pageIdType | layoutIdType | blockIdType | groupIdType | contentsIdType;
    parentId?:pageIdType | layoutIdType | blockIdType | groupIdType | contentsIdType;
    childrenItem:Item[];
    type: 'PAGE' | 'LAYOUT' | 'BLOCK' | 'GROUP' | 'CONTENTS';
    contentsType?: 'EMPTY' | 'BUTTON' | 'ADD' ;
}


export default Item;