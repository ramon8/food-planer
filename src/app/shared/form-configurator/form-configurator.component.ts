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

    ngOnDestroy(): void { }

    get ServiceQuestionType(): typeof ServiceQuestionType { return ServiceQuestionType; }

    // submit form handler
    onSubmit(): void {
        // console.log(this.form.value);
        // console.log(this.filterResults(this.form.value));
        this.formInfo.emit(this.filterResults(this.form.value));
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
    // TODO: NOT IN USE BECAUSE OF REACTIVE FORM BUG
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
            // answer: [null, Validators.required]
        });
    }

    private createAnswerForm(question: OfferedServiceQuestion): FormArray {

        const required = question.required ? Validators.required : '';

        if (question.offeredServiceQuestionType === ServiceQuestionType.multiple) {
            return this.fb.array(
                question.offeredServiceAnswers.map(
                    () => false
                )
            );
        }
        return this.fb.array([null]);
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
                } else if (question.answer[0] === null) {
                    filteredAnswers.questions[i].answer = [];
                }
            }
        );

        return filteredAnswers;
    }
}
