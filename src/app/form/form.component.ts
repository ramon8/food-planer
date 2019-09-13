import { Component, OnInit } from '@angular/core';

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

    // TODO: move to static example data
    questions: OfferedServiceQuestion[] = [
        {
            title: 'A Instalar en:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: ServiceQuestionType.unique,
            offeredServiceAnswers: [
                {
                    answer: 'Vivienda',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 1
                },
                {
                    answer: 'Oficina o local comercial',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 2
                },
                {
                    answer: 'Otros',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 3
                }
            ],
            questionOrder: 1,
            required: true
        },
        {
            title: 'Medidas de la vivienda, oficina o local:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: ServiceQuestionType.unique,
            offeredServiceAnswers: [
                {
                    answer: 'Hasta 60m2',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 1
                },
                {
                    answer: 'Entre 61m2 y 100m2',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 2
                },
                {
                    answer: 'Más de 100m2',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 3
                },
                {
                    answer: 'Lo desconozco',
                    offeredServiceAnswerType: ServiceAnswersType.default,
                    answerOrder: 4
                }
            ],
            questionOrder: 2,
            required: true
        },
        {
            title: 'Metros del compresor al split:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: ServiceQuestionType.unique,
            offeredServiceAnswers: [
                {
                    answer: 'metros',
                    offeredServiceAnswerType: ServiceAnswersType.numeric,
                    answerOrder: 1
                },
                {
                    answer: 'Lo desconozco',
                    offeredServiceAnswerType: ServiceAnswersType.default,
                    answerOrder: 2
                }
            ],
            questionOrder: 3,
            required: true
        },
        {
            title: 'Características de la instalación:',
            subTitle: 'Puedes elegir varias opciones',
            offeredServiceQuestionType: ServiceQuestionType.multiple,
            offeredServiceAnswers: [
                {
                    answer: '1 split',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 1
                },
                {
                    answer: '2 splits',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 2
                },
                {
                    answer: 'Multisplit',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 3
                },
                {
                    answer: 'Bomba de calor',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 4
                },
                {
                    answer: 'Por conductos o cassettes',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 5
                },
                {
                    answer: 'Lo desconozco',
                    offeredServiceAnswerType: ServiceAnswersType.default,
                    answerOrder: 6
                }
            ],
            questionOrder: 4,
            required: true
        },
        {
            title: '¿Existe preinstalación?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: ServiceQuestionType.unique,
            offeredServiceAnswers: [
                {
                    answer: 'Sí',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 1
                },
                {
                    answer: 'No',
                    offeredServiceAnswerType: ServiceAnswersType.closed,
                    answerOrder: 2
                },
                {
                    answer: 'Lo desconozco',
                    offeredServiceAnswerType: ServiceAnswersType.default,
                    answerOrder: 3
                }
            ],
            questionOrder: 5,
            required: true
        },
        {
            title: 'Si tienes más información sobre el trabajo a realizar, escríbela aquí para poder calcular mejor el presupuesto estimado:',
            subTitle: '',
            offeredServiceQuestionType: ServiceQuestionType.alphanumeric,
            questionOrder: 6,
            required: false
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    // form submit handler
    onFormSubmit(formResult: FormOutput): void {
        console.log('FORM RESULTS');
        console.log(formResult);
    }

}
