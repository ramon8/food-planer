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
