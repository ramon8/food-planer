import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { OfferedServiceQuestion } from '@app/_models';
import { OfferedServiceAnswerAdapter } from './offered-service-answer.adapter';

@Injectable({
    providedIn: 'root'
})
export class OfferedServiceQuestionAdapter implements Adapter<OfferedServiceQuestion> {

    constructor(private offeredServiceAnswerAdapter: OfferedServiceAnswerAdapter) { }

    adapt(item: any = {}): OfferedServiceQuestion {
        return new OfferedServiceQuestion(
            item.title,
            item.subTitle,
            item.offeredServiceQuestionType,
            this.offeredServiceAnswerAdapter.adaptMap(item.offeredServiceAnswers),
            item.questionOrder,
            item.required
        );
    }

    adaptMap(items: any[] = []): OfferedServiceQuestion[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
