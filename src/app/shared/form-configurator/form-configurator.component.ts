import {
    Component,
    OnInit,
    Input,
    Output,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    EventEmitter
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    AbstractControl,
    FormArray,
    FormControl,
} from '@angular/forms';
import * as _ from 'lodash';

import {
    OfferedServiceQuestion,
    ServiceQuestionType,
    FormOutput,
    Question,
} from '@app/_models';

@Component({
    selector: 'app-form-configurator',
    templateUrl: './form-configurator.component.html',
    styleUrls: ['./form-configurator.component.scss']
})
export class FormConfiguratorComponent implements OnInit, OnChanges, OnDestroy {

    @Input() questions: OfferedServiceQuestion[];
    @Output() formInfo: EventEmitter<FormOutput> = new EventEmitter<FormOutput>();
    form: FormGroup;

    constructor(private fb: FormBuilder) { }

    ngOnChanges(changes: SimpleChanges): void {
        this.buildForm(changes.questions.currentValue);
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        console.log('destroyed form-configurator');
    }

    // ServiceQuestionType getter to be used in template
    get ServiceQuestionType(): typeof ServiceQuestionType { return ServiceQuestionType; }

    // submit form handler
    onSubmit(): void {
        if (this.form.valid) {
            this.formInfo.emit(this.filterResults(this.form.value));
            this.resetForm();
        }
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
    // TODO: remove??
    getAnswersControls(questionIndex: number, answerIndex?: number): AbstractControl[] | AbstractControl {

        const questionType = this.questions[questionIndex].offeredServiceQuestionType;
        const questionControls = this.getQuestionsControls(questionIndex);
        const abstractAnswerControls = (questionControls as FormGroup).get('answer');

        // case single control (single answer)
        if (
            questionType === ServiceQuestionType.unique ||
            questionType === ServiceQuestionType.numeric ||
            questionType === ServiceQuestionType.alphanumeric ||
            questionType === ServiceQuestionType.numeric_selector
        ) {
            return abstractAnswerControls as FormControl;
        }

        // case single control in array of controls (multiple answers)
        // TODO: NOT WORKING
        const answerControls = (abstractAnswerControls as FormArray).controls;
        if (answerIndex || answerIndex === 0) {
            return answerControls[answerIndex];
        }

        // case return entire array of controls
        return answerControls;
    }

    // returns input type based on question type
    // TODO: NOT IN USE BECAUSE OF REACTIVE FORM BUG
    getInputType(questionIndex: number): string {
        switch (this.questions[questionIndex].offeredServiceQuestionType) {
            case ServiceQuestionType.multiple:
                return 'checkbox';
            case ServiceQuestionType.unique:
                return 'radio';
            default:
                return 'number';
        }
    }

    // form builder
    private buildForm(questions: OfferedServiceQuestion[]): void {
        this.form = this.fb.group({
            questions: this.fb.array(
                questions.map(
                    (question) => this.createQuestionForm(question)
                )
            ),
            textArea: [null]
        });
    }

    // build individual question form
    private createQuestionForm(question: OfferedServiceQuestion): FormGroup {
        return this.fb.group({
            title: [question.title, Validators.required],
            answer: this.createAnswerForm(question)
        });
    }

    // answer FormArray builder
    private createAnswerForm(question: OfferedServiceQuestion): FormArray | FormControl {

        if (question.offeredServiceQuestionType === ServiceQuestionType.multiple) {
            return this.fb.array(
                question.offeredServiceAnswers.map(
                    () => false
                ),
                question.required ? this.formArrayValidator : () => null
            );
        }
        return this.fb.control(
            null,
            question.required ? Validators.required : () => null
        );
    }

    // filter form values and return new results object
    private filterResults(formValues: FormOutput): FormOutput {
        const filteredAnswers: FormOutput = _.cloneDeep(formValues);

        formValues.questions.map(
            (question: Question, i: number) => {
                if (this.questions[i].offeredServiceQuestionType === ServiceQuestionType.multiple) {
                    filteredAnswers.questions[i].answer = [];
                    question.answer.map(
                        (answer: string | boolean, j: number) => {
                            if (answer) {
                                filteredAnswers.questions[i].answer.push(
                                    this.questions[i].offeredServiceAnswers[j].answer
                                );
                            }
                        }
                    );
                }
            }
        );

        return filteredAnswers;
    }

    // reset form
    // TODO: use form reset instead of rebuilding the entire form (titles are lost)
    private resetForm(): void {
        // this.form.reset();
        this.buildForm(this.questions);
    }

    /* CUSTOM VALIDATORS */
    // form array validator
    private formArrayValidator(formArray: FormArray): { [s: string]: boolean } {

        const valid = formArray.controls.some(
            (control) => control.value
        );

        if (valid) {
            return null;
        }

        return { notSelected: true };
    }
}
