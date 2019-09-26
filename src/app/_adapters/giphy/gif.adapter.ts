import { Injectable } from '@angular/core';

import { Adapter } from '@app/_helpers/adapter';
import { Gif } from '@app/_models';
import { ImagesAdapter } from './images.adapter';

@Injectable({
    providedIn: 'root'
})
export class GifAdapter implements Adapter<Gif> {

    constructor(private imagesAdapter: ImagesAdapter) { }

    adapt(item: any = {}): Gif {
        return new Gif(
            item.type,
            item.id,
            item.slug,
            item.url,
            item.bitlyUrl,
            item.embedUrl,
            item.username,
            item.source,
            item.rating,
            item.contentUrl,
            item.user,
            item.sourceTld,
            item.sourcePostUrl,
            item.updateDatetime,
            item.createDatetime,
            item.importDatetime,
            item.trendingDatetime,
            this.imagesAdapter.adapt(item.images),
            item.title
        );
    }

    adaptMap(items: any[] = []): Gif[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
