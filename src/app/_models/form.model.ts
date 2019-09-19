// TODO: temporary form model

export class OfferedServiceQuestion {
    constructor(
        public title: string = '',
        public subTitle: string = '',
        public offeredServiceQuestionType: ServiceQuestionType = ServiceQuestionType.unique,
        public offeredServiceAnswers: OfferedServiceAnswer[] = [],
        public questionOrder: number = null,
        public required: boolean = false,
    ) { }
}

// question type
// export interface OfferedServiceQuestion {
//     title: string;
//     subTitle?: string;
//     offeredServiceQuestionType: ServiceQuestionType;
//     offeredServiceAnswers?: OfferedServiceAnswer[];
//     questionOrder: number;
//     required: boolean;
// }

// answer type
// export interface OfferedServiceAnswer {
//     answer: string;
//     offeredServiceAnswerType: ServiceAnswersType;
//     answerOrder: number;
// }

// tslint:disable-next-line: max-classes-per-file
export class OfferedServiceAnswer {
    constructor(
        public answer: string = '',
        public offeredServiceAnswerType: ServiceAnswersType = ServiceAnswersType.closed,
        public answerOrder: number = null,
    ) { }
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
