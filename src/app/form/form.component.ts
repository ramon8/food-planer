import { Component, OnInit } from '@angular/core';

import { StaticDataService } from '@app/_services/static-data.service';
import {
    OfferedServiceQuestion,
    ServiceQuestionType,
    ServiceAnswersType,
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

    // form submit handler
    onFormSubmit(formResult: FormOutput): void {
        console.log('FORM RESULTS');
        console.log(formResult);
    }

}
