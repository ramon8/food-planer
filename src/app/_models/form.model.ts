// TODO: temporary form model

// question type
export interface OfferedServiceQuestion {
    title: string;
    subTitle?: string;
    offeredServiceQuestionType: ServiceQuestionType;
    offeredServiceAnswers?: OfferedServiceAnswers[];
    questionOrder: number;
    required: boolean;
}

// answer type
export interface OfferedServiceAnswers {
    answer: string;
    offeredServiceAnswerType: ServiceAnswersType;
    answerOrder: number;
}

export enum ServiceQuestionType {
    unique = 'UNIQUE',
    multiple = 'MULTIPLE',
    alphanumeric = 'ALPHANUMERIC',
    numeric = 'NUMERIC',
    numeric_selector = 'NUMERIC-SELECTOR',
}

export enum ServiceAnswersType {
    numeric = 'NUMERIC',
    closed = 'CLOSED',
    default = 'DEFAULT',
}

// output object model
export interface FormOutput {
    questions: Question[];
    textArea: string;
}

export interface Question {
    title: string;
    answer: (string | boolean)[];
}

export type formIdRange = 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84;
