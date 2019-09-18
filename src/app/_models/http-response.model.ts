import { OfferedServiceQuestion } from '.';

export interface HttpResponse {
    status: 'Success' | 'Error'; // TODO: change tu status text maybe?
    code: number; // TODO: change to http status code type https://www.npmjs.com/package/http-status-codes
    message: 'string'; // TODO: change tu status text maybe?
    data: HttpResponseData;
}

export interface HttpResponseData {
    id: number;
    parentId: number;
    code: string; // specific of API. This API is used as temporal example
    level: number;
    title: string;
    description: string;
    offeredServiceCoverage: string[];
    offeredServiceQuestions: OfferedServiceQuestion[];
}
