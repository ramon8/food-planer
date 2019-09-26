import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { GiphyResponse } from '@app/_models';
import { GifAdapter } from './gif.adapter';

@Injectable({
    providedIn: 'root'
})
export class GiphyResponseAdapter implements Adapter<GiphyResponse> {

    constructor(private gifAdapter: GifAdapter) { }

    adapt(item: any = {}): GiphyResponse {
        return new GiphyResponse(
            this.gifAdapter.adaptMap(item.data),
            null,
            null,
        );
    }

    adaptMap(items: any[] = []): GiphyResponse[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
