import {blockIdType, groupIdType, layoutIdType, pageIdType} from "./src/interface/Item";

const pageIds: pageIdType = `page_${Math.random()}`;
const layoutIds: layoutIdType = `layout_${Math.random()}`;
const blockIds: blockIdType = `block_${Math.random()}`;
const groupIds: groupIdType = `group_${Math.random()}`;
const contentsIds = `contents_${Math.random()}`;

const EDITOR_API_V2 = {
    page: [
        {
            id: pageIds,
            layoutIds: [layoutIds],
        }
    ],
    layout: [
        {
            id: layoutIds,
            blockIds: [blockIds],
            parentId: pageIds,
        }
    ],
    block: [
        {
            id: blockIds,
            groupIds: [groupIds],
            parentId: blockIds,
        }
    ],
    group: [{
        id: groupIds,
        contentsIds: [contentsIds],
        parentId: groupIds,
    }],
    contents: [
        {
            id: contentsIds,
            parentId: groupIds,
            type: 'BUTTON',
            value: '텍스트입력값'

        }
    ],
}