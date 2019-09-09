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
