import { IAnswer } from "./answer";

export interface IQuestion {
    id: number;
    text: string;
    image?: string;
    answers: IAnswer[];
}
