import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { Images } from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class ImagesAdapter implements Adapter<Images> {

    constructor() { }

    adapt(item: any = {}): Images {
        return new Images(
            item.original
        );
    }

    adaptMap(items: any[] = []): Images[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
