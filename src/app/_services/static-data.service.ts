import { Injectable } from '@angular/core';

import {
    OfferedServiceQuestion,
    ServiceQuestionType,
    ServiceAnswersType,
} from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class StaticDataService {

    private formQuestions: { [name: number]: OfferedServiceQuestion[] } = {
        1: [
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
        ],
        2: [
            {
                title: '¿Qué tipo de servicio de limpieza necesitas?',
                subTitle: 'Puedes elegir varias opciones',
                offeredServiceQuestionType: ServiceQuestionType.multiple,
                offeredServiceAnswers: [
                    {
                        answer: 'Vivienda',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 1
                    },
                    {
                        answer: 'Comunidad',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 2
                    },
                    {
                        answer: 'Oficina',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 3
                    },
                    {
                        answer: 'Por mudanza',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 4
                    },
                    {
                        answer: 'Solo Ventanas',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 5
                    },
                    {
                        answer: 'Solo Alfombras',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 6
                    },
                    {
                        answer: 'Limpieza después de construcción',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 7
                    }
                ],
                questionOrder: 1,
                required: true
            },
            {
                title: '¿Necesitas que el profesional lleve productos y material de limpieza?',
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
                    }
                ],
                questionOrder: 2,
                required: true
            },
            {
                title: 'Periodo  de contratación del servicio de limpieza:',
                subTitle: 'Solo puedes marcar una respuesta',
                offeredServiceQuestionType: ServiceQuestionType.unique,
                offeredServiceAnswers: [
                    {
                        answer: 'Puntual',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 1
                    },
                    {
                        answer: 'un solo día',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 2
                    },
                    {
                        answer: 'semanas',
                        offeredServiceAnswerType: ServiceAnswersType.numeric,
                        answerOrder: 3
                    },
                    {
                        answer: 'meses',
                        offeredServiceAnswerType: ServiceAnswersType.numeric,
                        answerOrder: 4
                    }
                ],
                questionOrder: 3,
                required: true
            },
            {
                title: 'Días de la semana preferidos para la limpieza:',
                subTitle: 'Puedes elegir varias opciones',
                offeredServiceQuestionType: ServiceQuestionType.multiple,
                offeredServiceAnswers: [
                    {
                        answer: 'Lunes',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 1
                    },
                    {
                        answer: 'Martes',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 2
                    },
                    {
                        answer: 'Miércoles',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 3
                    },
                    {
                        answer: 'Jueves',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 4
                    },
                    {
                        answer: 'Viernes',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 5
                    },
                    {
                        answer: 'Sábado',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 6
                    },
                    {
                        answer: 'Domingo',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 7
                    }
                ],
                questionOrder: 4,
                required: true
            },
            {
                title: 'Franja del día preferida:',
                subTitle: 'Solo puedes marcar una respuesta',
                offeredServiceQuestionType: ServiceQuestionType.unique,
                offeredServiceAnswers: [
                    {
                        answer: 'Mañana (Entre las 8 - 14 h)',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 1
                    },
                    {
                        answer: 'Medio día  (Entre las 14 - 16 h)',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 2
                    },
                    {
                        answer: 'Tarde (A partir de las 16h)',
                        offeredServiceAnswerType: ServiceAnswersType.closed,
                        answerOrder: 3
                    }
                ],
                questionOrder: 5,
                required: true
            },
            {
                title: 'Nº de horas a la semana a realizar:',
                subTitle: '',
                offeredServiceQuestionType: ServiceQuestionType.numeric,
                questionOrder: 6,
                required: true
            }
        ]
    };

    constructor() { }

    getFormQuestions(formNumber: number): OfferedServiceQuestion[] {
        return this.formQuestions[formNumber].slice();
    }
}
