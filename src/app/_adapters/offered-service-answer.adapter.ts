import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { OfferedServiceAnswer } from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class OfferedServiceAnswerAdapter implements Adapter<OfferedServiceAnswer> {

    constructor() { }

    adapt(item: any = {}): OfferedServiceAnswer {
        return new OfferedServiceAnswer(
            item.answer,
            item.offeredServiceAnswerType,
            item.answerOrder
        );
    }

    adaptMap(items: any[] = []): OfferedServiceAnswer[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
