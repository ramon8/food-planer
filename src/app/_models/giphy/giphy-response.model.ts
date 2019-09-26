import { Gif, GiphyPagination, GiphyMeta } from '..';

export class GiphyResponse {

    constructor(
        public data: Gif[] = [],
        public pagination: GiphyPagination = null,
        public meta: GiphyMeta = null,
    ) { }
}
