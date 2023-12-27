import {LayoutIdType} from "../layout/ILayout";

export type PageIdType = `page_${string}`;

interface IPage {
    id: PageIdType;
    layoutIds: LayoutIdType[];
}

export default IPage