import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { GiphyResponse, Gif } from '@app/_models';
import { GifAdapter } from '@app/_adapters';

@Injectable({
    providedIn: 'root'
})
export class GifService {

    private readonly apiUrl: string = `${environment.giphy.host}${environment.giphy.baseUrl}`;
    private readonly apiKey: string = environment.giphy.apiKey;
    private readonly endpoints: { [name: string]: string } = {
        search: 'search'
    };

    constructor(
        private httpClient: HttpClient,
        private gifAdapter: GifAdapter
    ) { }

    /**
     * Returns an observable of a list of gif
     *
     * @remarks
     * This endpoint cab be found here {@link https://developers.giphy.com/docs/api/endpoint#search}.
     *
     * @param term - Search query term or phrase
     * @param limit - The maximum number of objects to return. (Default: “25”)
     * @param offset - Specifies the starting position of the results. Defaults to 0.
     * @param rating - Filters results by specified rating.
     *                 If you do not specify a rating, you will receive results from all possible ratings.
     * @param lang - Specify default language for regional content; use a 2-letter ISO 639-1 language code.
     * @param randomId - An ID/proxy for a specific user.
     * @returns Observable of gif list
     *
     * @beta
     */
    searchGif(
        term: string,
        limit: number = 25,
        offset: number = 0,
        rating: string = 'g',
        lang: string = 'en',
        randomId?: string
    ): Observable<Gif[]> {

        const url = `${this.apiUrl}${this.endpoints.search}`;
        const options = {
            params: new HttpParams()
                .set('q', term)
                .set('limit', '' + limit)
                .set('offset', '' + offset)
                .set('rating', rating)
                .set('lang', lang)
                // .set('random_id', randomId)
                .set('api_key', this.apiKey)
        };

        return this.httpClient.get<GiphyResponse>(url, options)
            .pipe(
                map(
                    (response: GiphyResponse): Gif[] => {
                        return this.gifAdapter
                            .adaptMap(
                                response.data
                            );
                    }
                )
            );
    }

    /**
     * Returns a specific gif
     *
     * @remarks
     * This endpoint cab be found here {@link https://developers.giphy.com/docs/api/endpoint#get-gif-by-id}.
     *
     * @param gifId - Search query term or phrase
     * @returns Observable of gif
     *
     * @beta
     */
    getGifById(gifId: string): Observable<Gif> {

        const url = `${this.apiUrl}${gifId}`;
        const options = {
            params: new HttpParams()
                .set('gif_id', gifId)
                .set('api_key', this.apiKey)
        };

        return this.httpClient.get<GiphyResponse>(url, options)
            .pipe(
                map(
                    (response: GiphyResponse): Gif => {
                        return this.gifAdapter
                            .adapt(
                                response.data
                            );
                    }
                )
            );
    }
}
