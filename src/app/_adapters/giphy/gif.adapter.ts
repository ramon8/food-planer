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
            item.update_datetime ? new Date(item.update_datetime) : null,
            item.create_datetime ? new Date(item.create_datetime) : null,
            item.import_datetime ? new Date(item.import_datetime) : null,
            item.trending_datetime ? new Date(item.trending_datetime) : null,
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
