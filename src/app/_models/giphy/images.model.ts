export class Images {

    constructor(
        public original: {
            width: string;
            height: string;
            size: string;
            frames: string;
            mp4: string;
            mp4Size: string;
            webp: string;
            webpSize: string;
        } = {
                width: '',
                height: '',
                size: '',
                frames: '',
                mp4: '',
                mp4Size: '',
                webp: '',
                webpSize: '',
            }
    ) { }
}
