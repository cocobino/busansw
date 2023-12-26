import Item, {blockIdType, groupIdType, layoutIdType, pageIdType} from "./src/interface/Item";

const pageIds:pageIdType = `page_${Math.random()}`;
const layoutIds:layoutIdType = `layout_${Math.random()}`;
const blockIds:blockIdType = `block_${Math.random()}`;
const groupIds:groupIdType = `group_${Math.random()}`;

export const EDITOR_API_V1:Item = {
    id: pageIds,
    type: 'PAGE',
    childrenItem: [
        {
            id: layoutIds,
            type: 'LAYOUT',
            childrenItem: [
                {
                    id: blockIds,
                    parentId: layoutIds,
                    type: 'BLOCK',
                    childrenItem: [
                        {
                            id: groupIds,
                            parentId: blockIds,
                            type:'CONTENTS',
                            childrenItem: [
                                {
                                    id: `contents_${Math.random()}`,
                                    parentId: groupIds,
                                    type: 'CONTENTS',
                                    contentsType: 'EMPTY',
                                    childrenItem: [],
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}