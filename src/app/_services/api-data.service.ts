import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { OfferedServiceQuestion, HttpResponse, formIdRange } from '@app/_models';
import { OfferedServiceQuestionAdapter } from '@app/_adapters';

@Injectable({
    providedIn: 'root'
})
export class ApiDataService {

    private readonly apiUrl: string = `${environment.host}${environment.baseUrl}`;

    constructor(
        private httpClient: HttpClient,
        private offeredServiceQuestionAdapter: OfferedServiceQuestionAdapter
    ) { }

    // api call to get dynamic form data
    // TODO: return an array of instances of OfferedServiceQuestion
    getForm(formId: formIdRange): Observable<OfferedServiceQuestion[]> {
        const url = `${this.apiUrl}${formId}`;
        const language: string = 'es-ES';
        const options = {
            params: new HttpParams().set('language', language)
        };



        return this.httpClient.get<HttpResponse>(url, options)
            .pipe(
                map(
                    (response: HttpResponse): OfferedServiceQuestion[] => {
                        return this.offeredServiceQuestionAdapter
                            .adaptMap(
                                response.data.offeredServiceQuestions
                            );
                    }
                )
            );
    }
}
