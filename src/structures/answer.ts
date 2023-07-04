export class IAnswer {
    id: number;
    text: string;
    checked: boolean = false;
    question_id: number;
    image?: string;

    constructor(id: number, text: string, checked: boolean = false, question_id: number, image?: string) {
        this.id = id;
        this.text = text;
        this.image = image;
        this.checked = checked;
        this.question_id = question_id;
    }
}
