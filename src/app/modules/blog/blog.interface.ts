
import { Types } from "mongoose";

export type Tblog = {
    _id?: string,
    title: string;
    content: string;
    author: Types.ObjectId;
    isPublished: boolean;
};