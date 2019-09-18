import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { OfferedServiceQuestion } from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class OfferedServiceQuestionAdapter implements Adapter<OfferedServiceQuestion> {

    constructor() { }

    adapt(item: any = {}): OfferedServiceQuestion {
        return new OfferedServiceQuestion(
            item.title,
            item.subTitle,
            item.offeredServiceQuestionType,
            item.offeredServiceAnswers,
            item.questionOrder,
            item.required
        );
    }
}
