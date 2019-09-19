import { Injectable } from '@angular/core';

import {
    OfferedServiceQuestion,
    ServiceQuestionType,
    ServiceAnswersType,
} from '@app/_models';
import { OfferedServiceQuestionAdapter } from '@app/_adapters';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    // static example data
    // private readonly formQuestions: { [name: number]: OfferedServiceQuestion[] };
    private readonly formQuestions: OfferedServiceQuestion[][] = [
        [{
            title: 'A Instalar en:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Vivienda',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Oficina o local comercial',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Otros',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }],
            questionOrder: 1,
            required: true
        }, {
            title: 'Medidas de la vivienda, oficina o local:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Hasta 60m2',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Entre 61m2 y 100m2',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Más de 100m2',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 4
            }],
            questionOrder: 2,
            required: true
        }, {
            title: 'Metros del compresor al split:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'metros',
                offeredServiceAnswerType: 'NUMERIC',
                answerOrder: 1
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 2
            }],
            questionOrder: 3,
            required: true
        }, {
            title: 'Características de la instalación:',
            subTitle: 'Puedes elegir varias opciones',
            offeredServiceQuestionType: 'MULTIPLE',
            offeredServiceAnswers: [{
                answer: '1 split',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: '2 splits',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Multisplit',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }, {
                answer: 'Bomba de calor',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 4
            }, {
                answer: 'Por conductos o cassettes',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 5
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 6
            }],
            questionOrder: 4,
            required: true
        }, {
            title: '¿Existe preinstalación?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Sí',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'No',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 3
            }],
            questionOrder: 5,
            required: true
        }, {
            title: 'Si tienes más información sobre el trabajo a realizar, escríbela aquí para poder calcular mejor el presupuesto estimado:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 6,
            required: false
        }],
        [{
            title: 'A Instalar en:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Vivienda',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Oficina o local comercial',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Otros',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }],
            questionOrder: 1,
            required: true
        }, {
            title: '¿De cuántos litros?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Menos de 50',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Entre 50 y 100',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Más de 100',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 4
            }],
            questionOrder: 2,
            required: true
        }, {
            title: 'Tipo de servicio:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Instalación nueva',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Cambiar instalación termo antiguo',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Otros',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }],
            questionOrder: 3,
            required: true
        }, {
            title: 'Medidas aproximadas:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Menos de 60 cm',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Entre 60 y 80 cm de alto',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Más de 80 cm',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 4
            }],
            questionOrder: 4,
            required: true
        }, {
            title: 'Si tienes más información sobre el trabajo a realizar, escríbela aquí para poder calcular mejor el presupuesto estimado:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 5,
            required: false
        }],
        [{
            title: 'Nº de bultos:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 1,
            required: true
        }, {
            title: '¿Es necesario empaquetar?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Sí',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'No, estará hecho',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }],
            questionOrder: 2,
            required: true
        }, {
            title: 'Tipo de mudanza:',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Misma provincia',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'Nacional',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Internacional',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 3
            }],
            questionOrder: 3,
            required: true
        }, {
            title: 'De dónde (población de origen):',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 4,
            required: true
        }, {
            title: 'A dónde (población de destino):',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 5,
            required: true
        }, {
            title: 'Planta de destino, en número:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 6,
            required: true
        }, {
            title: 'Planta de destino, en número:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 7,
            required: true
        }, {
            title: '¿Hay ascensor en el origen?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Sí',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'No',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 3
            }],
            questionOrder: 8,
            required: true
        }, {
            title: '¿Hay ascensor en el destino?',
            subTitle: 'Solo puedes marcar una respuesta',
            offeredServiceQuestionType: 'UNIQUE',
            offeredServiceAnswers: [{
                answer: 'Sí',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 1
            }, {
                answer: 'No',
                offeredServiceAnswerType: 'CLOSED',
                answerOrder: 2
            }, {
                answer: 'Lo desconozco',
                offeredServiceAnswerType: 'DEFAULT',
                answerOrder: 3
            }],
            questionOrder: 9,
            required: true
        }, {
            title: '¿Hay bultos especiales?',
            subTitle: 'Puedes elegir varias opciones',
            offeredServiceQuestionType: 'MULTIPLE',
            questionOrder: 10,
            required: true
        }, {
            title: 'Si tienes más información sobre el trabajo a realizar, escríbela aquí para poder calcular mejor el presupuesto estimado:',
            subTitle: '',
            offeredServiceQuestionType: 'ALPHANUMERIC',
            questionOrder: 11,
            required: false
        }]
    ].map(
        (questions: any[]): OfferedServiceQuestion[] => {
            return this.offeredServiceQuestionAdapter.adaptMap(
                questions
            );
        }
    );

    constructor(
        private offeredServiceQuestionAdapter: OfferedServiceQuestionAdapter
    ) { }

    // returns a single form on index
    getFormQuestions(formNumber: number): OfferedServiceQuestion[] {
        return this.formQuestions[formNumber].slice();
    }

    // returns a single form on index
    getAllFormQuestions(): OfferedServiceQuestion[][] {
        return this.formQuestions.slice();
    }

    // returns keys of forms stored object
    // getFormsAmountKeys(): string[] {
    //     return Object.keys(this.formQuestions);
    // }

    // returns amount of forms stored
    getFormsAmount(): number {
        // return Object.keys(this.formQuestions).length;
        return this.formQuestions.length;
    }
}
