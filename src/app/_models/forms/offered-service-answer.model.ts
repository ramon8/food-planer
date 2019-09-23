export class OfferedServiceAnswer {
    constructor(
        public answer: string = '',
        public offeredServiceAnswerType: ServiceAnswersType = ServiceAnswersType.closed,
        public answerOrder: number = null,
    ) { }
}

export enum ServiceAnswersType {
    numeric = 'NUMERIC',
    closed = 'CLOSED',
    default = 'DEFAULT',
}
