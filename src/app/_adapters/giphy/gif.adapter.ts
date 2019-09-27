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
            item.bitly_url,
            item.embed_url,
            item.username,
            item.source,
            item.rating,
            item.content_url,
            item.user,
            item.source_tld,
            item.source_post_url,
            item.update_datetime,
            item.create_datetime,
            item.import_datetime,
            item.trending_datetime,
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
