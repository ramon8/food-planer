// output object model
export interface FormOutput {
    questions: Question[];
    textArea: string;
}

export interface Question {
    title: string;
    answer: (string | boolean)[];
}
