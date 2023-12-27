import {GroupIdType} from "../group/IGroup";

export type ContentsIdType = `contents_${string}`;

export interface IContentText {
    value: string
}

export interface IContentButton {
    value: string;
    borderRadius: string;
}

export type IContent<T> = {
    id: ContentsIdType;
    parentId: GroupIdType;
    type: "EMPTY" | "TEXT" | "BUTTON"
} & T

export type ContentsTypes = IContentText | IContentButton

