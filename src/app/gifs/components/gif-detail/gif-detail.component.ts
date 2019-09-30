import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Gif } from '@app/_models';
import { GifService } from '@app/_services/gif.service';

@Component({
    selector: 'app-gif-detail',
    templateUrl: './gif-detail.component.html',
    styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

    @Input() gifId: string;
    gif: Gif;

    constructor(private gifService: GifService) { }

    ngOnInit(): void {
        this.getGif(this.gifId);
    }

    private getGif(gifId: string): void {
        this.gifService.getGifById(gifId)
            .subscribe(
                (gif: Gif) => {
                    console.log(gif);
                    this.gif = gif;
                }
            );
    }
}
