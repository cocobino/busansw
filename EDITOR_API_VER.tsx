const pageIds = `page_${Math.random()}`;
const layoutIds = `layout_${Math.random()}`;
const blockIds = `block_${Math.random()}`;
const groupIds = `group_${Math.random()}`;

export const EDITOR_API_V1 = {
    id: pageIds,
    childrenItem: [
        {
            id: layoutIds,
            parentId: pageIds,
            childrenItem: [
                {
                    id: blockIds,
                    parentId: layoutIds,
                    childrenItem: [
                        {
                            id: groupIds,
                            parentId: blockIds,
                            childrenItem: [
                                {
                                    id: `contents_${Math.random()}`,
                                    parentId: groupIds,
                                    type: 'CONTENTS',
                                    contentsType: 'EMPTY',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}