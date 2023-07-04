import { IQuestion } from "./question";

export type TQuiz = {
    id: number;
    questions: Array<IQuestion>;
    created: string;
}
