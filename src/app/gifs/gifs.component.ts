import { Component, OnInit } from '@angular/core';

import { GifService } from '@app/_services/gif.service';
import { Gif } from '@app/_models';

@Component({
    selector: 'app-gifs',
    templateUrl: './gifs.component.html',
    styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

    gifs: Gif[];

    constructor(private gifService: GifService) { }

    ngOnInit(): void {
        this.gifService.searchGif('goku')
            .subscribe(
                (gifs: Gif[]) => {
                    console.log(gifs);
                    this.gifs = gifs;
                }
            );
    }

}
