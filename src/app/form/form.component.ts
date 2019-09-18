import { Component, OnInit } from '@angular/core';

import { StaticDataService } from '@app/_services/static-data.service';
import { ApiDataService } from '@app/_services/api-data.service';
import {
    OfferedServiceQuestion,
    FormOutput,
    formIdRange
} from '@app/_models';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    questions: OfferedServiceQuestion[];
    // TODO: make private after testing
    formId: formIdRange = 68;

    constructor(
        private staticData: StaticDataService,
        private apiData: ApiDataService
    ) { }

    ngOnInit(): void {
        // this.questions = this.staticData.getFormQuestions(2);
        this.getForm();
    }

    getFormsAmountKeys(): string[] { return this.staticData.getFormsAmountKeys(); }

    // form submit handler
    onFormSubmit(formResult: FormOutput): void {
        console.log('FORM RESULTS');
        console.log(formResult);
    }

    // change form handler
    onFormChange(key: '+' | '-'): void {

        if (key === '+' && this.formId < 84) {
            this.formId++;
        } else if (key === '-' && this.formId > 64) {
            this.formId--;
        } else {
            return;
        }

        this.getForm();
    }
    // onFormChange(key: number): void {
    //     this.questions = this.staticData.getFormQuestions(key);
    // }

    // executes service subscription
    private getForm(): void {
        this.apiData.getForm(this.formId)
            .subscribe((questions: OfferedServiceQuestion[]) => {
                this.questions = questions;
            });
    }
}
