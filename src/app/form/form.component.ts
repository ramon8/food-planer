import { Component, OnInit } from '@angular/core';

import { StaticDataService } from '@app/_services/static-data.service';
import {
    OfferedServiceQuestion,
    FormOutput
} from '@app/_models';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    questions: OfferedServiceQuestion[];

    constructor(private staticData: StaticDataService) { }

    ngOnInit(): void {
        this.questions = this.staticData.getFormQuestions(2);
    }

    getFormsAmountKeys(): string[] { return this.staticData.getFormsAmountKeys(); }

    // form submit handler
    onFormSubmit(formResult: FormOutput): void {
        console.log('FORM RESULTS');
        console.log(formResult);
    }

    // change form handler
    onFormChange(key: number): void {
        this.questions = this.staticData.getFormQuestions(key);
    }
}
