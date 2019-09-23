import { OfferedServiceAnswer } from '..';

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

export enum ServiceQuestionType {
    unique = 'UNIQUE',
    multiple = 'MULTIPLE',
    alphanumeric = 'ALPHANUMERIC',
    numeric = 'NUMERIC',
    numeric_selector = 'NUMERIC-SELECTOR',
}
