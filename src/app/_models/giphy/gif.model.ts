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
        public rating: 'g' | 'pg' | 'pg-13' | 'r' = 'g',
        public contentUrl: string = '',
        public user: User = null,
        public sourceTld: string = '',
        public sourcePostUrl: string = '',
        public updateDatetime: Date = null,
        public createDatetime: Date = null,
        public importDatetime: Date = null,
        public trendingDatetime: Date = null,
        public images: Images = null,
        public title: string = ''
    ) {
        this.updateDatetime = this.sanitizeDate(updateDatetime);
        this.createDatetime = this.sanitizeDate(createDatetime);
        this.importDatetime = this.sanitizeDate(importDatetime);
        this.trendingDatetime = this.sanitizeDate(trendingDatetime);
    }

    // date sanitizer
    private sanitizeDate(date: Date): Date {
        if (date && isNaN(date.getTime())) {
            return null;
        }
        return date;
    }
}
