import { Component, OnInit } from '@angular/core';

import { GifService } from '@app/_services/gif.service';
import { Gif } from '@app/_models';
import { environment } from '@env/environment';

@Component({
    selector: 'app-gifs',
    templateUrl: './gifs.component.html',
    styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

    searchTerm: string;
    gifs: Gif[];

    constructor(private gifService: GifService) { }

    ngOnInit(): void {
        this.searchGif(environment.giphy.defaultSearch);
    }

    // search input event handler
    onSearchInput(searchTerm: string): void {
        this.searchGif(searchTerm);
    }

    // execute search gif from api
    private searchGif(searchTerm: string): void {
        this.gifService.searchGif(searchTerm)
            .subscribe(
                (gifs: Gif[]) => {
                    this.gifs = gifs;
                }
            );
    }
}
