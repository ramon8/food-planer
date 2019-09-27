import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Gif } from '@app/_models';
import { GifService } from '@app/_services/gif.service';

@Component({
    selector: 'app-gif-detail',
    templateUrl: './gif-detail.component.html',
    styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit, OnChanges {

    @Input() gifId: string;
    gif: Gif;

    constructor(private gifService: GifService) { }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        // if (changes) { this.getGif(changes.currentValue.gifId); }
    }

    ngOnInit(): void {
        if (this.gifId) { this.getGif(this.gifId); }
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
