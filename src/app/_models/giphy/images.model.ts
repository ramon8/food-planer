export class Images {

    static emptyImg: Image = {
        width: '',
        height: '',
        size: '',
        frames: '',
        mp4: '',
        mp4Size: '',
        webp: '',
        webpSize: '',
    };

    constructor(
        public fixedHeight: Image = Images.emptyImg,
        public original: Image = Images.emptyImg
    ) { }
}

export interface Image {
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4Size: string;
    webp: string;
    webpSize: string;
}
