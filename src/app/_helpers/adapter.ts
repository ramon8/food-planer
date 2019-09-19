export interface Adapter<T> {
    adapt(item: any): T;

    adaptMap(item: any): T[];
}
