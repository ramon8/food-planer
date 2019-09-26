import { User, Images } from '..';

export class Gif {

    constructor(
        public type: string = 'gif',
        public id: string = '',
        public slug: string = '',
        public url: string = '',
        public bitlyUrl: string = '',
        public embedUrl: string = '',
        public username: string = '',
        public source: string = '',
        public rating: string = '',
        public contentUrl: string = '',
        public user: User = null,
        public sourceTld: string = '',
        public sourcePostUrl: string = '',
        public updateDatetime: string = '',
        public createDatetime: string = '',
        public importDatetime: string = '',
        public trendingDatetime: string = '',
        public images: Images = null,
        public title: string = ''
    ) { }
}
