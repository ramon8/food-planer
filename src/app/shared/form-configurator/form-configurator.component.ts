import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    OnDestroy,
    SimpleChanges
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormArray
} from '@angular/forms';

import { OfferedServiceQuestion, ServiceQuestionType } from '@app/_models';

@Component({
    selector: 'app-form-configurator',
    templateUrl: './form-configurator.component.html',
    styleUrls: ['./form-configurator.component.scss']
})
export class FormConfiguratorComponent implements OnInit, OnChanges, OnDestroy {

    // TODO: add Formquestions model
    @Input() questions: OfferedServiceQuestion[];
    @Output() formInfo: any;
    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes.questions.currentValue);
        this.buildForm(changes.questions.currentValue);
        // console.log('Question Controls', this.getQuestionsControls());
        // console.log('Answer Controls', this.getAnswersControls(3));
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void { }

    onSubmit(): void {
        // const selectedOrderIds = this.form.value.orders
        //     .map((v, i) => v ? this.orders[i].id : null)
        //     .filter(v => v !== null);

        // console.log(selectedOrderIds);
        // console.log(this.form.value.questions);
        console.log(this.form.value.example);
        console.log(this.form.value.questions);
    }

    // returns a list of questions form control from form
    getQuestionsControls(index?: number): AbstractControl[] | AbstractControl {
        const controls = (this.form.get('questions') as FormArray).controls;
        if (index || index === 0) {
            return controls[index];
        }
        return controls;
    }

    // returns a list of answers form control from form
    getAnswersControls(questionIndex: number, answerIndex?: number): AbstractControl[] | AbstractControl {
        const questionControls = this.getQuestionsControls(questionIndex);
        const answerControls = ((questionControls as FormGroup).get('answer') as FormArray).controls;
        if (answerIndex || answerIndex === 0) {
            return answerControls[answerIndex];
        }
        return answerControls;
    }

    // returns input type based on question type
    getInputType(questionIndex: number): string {
        switch (this.questions[questionIndex].offeredServiceQuestionType) {
            case ServiceQuestionType.multiple:
                return 'checkbox';
            case ServiceQuestionType.unique:
                return 'radio';
            default:
                return 'text';
        }
    }

    // form builder
    private buildForm(questions: OfferedServiceQuestion[]): void {
        this.form = this.fb.group({
            example: [false, Validators.required],
            questions: this.fb.array(
                questions.map(
                    (question) => this.createQuestionForm(question)
                )
            ),
            textArea: [null]
        });
        console.log('FORM:', this.form);
        // console.log('QUESTIONS', this.getQuestionsControls());
        // console.log('QUESTIONS', this.getQuestionsControls(0));
    }

    // build individual question form
    private createQuestionForm(question: OfferedServiceQuestion): FormGroup {
        return this.fb.group({
            title: [question.title, Validators.required],
            answer: this.createAnswerForm(question)
            // answer: [null, Validators.required]
        });
    }

    private createAnswerForm(question: OfferedServiceQuestion): FormArray {

        const required = question.required ? Validators.required : '';
        // return this.fb.array(
        //     literal.textBoxes.map(
        //         () => null
        //     )
        // );

        if (question.offeredServiceQuestionType === ServiceQuestionType.multiple) {
            return this.fb.array(
                question.offeredServiceAnswers.map(
                    () => false
                )
            );
        }
        return this.fb.array([null]);
    }

}
