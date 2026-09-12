export interface Search {
    datasetid?: string;
    fields?: Record<string, any>;
    geometry?: Record<string, any>;
    record_timestamp?: string;
    recordid?: string;
}
export interface SearchListMatch {
    dataset: string;
    exclude?: string;
    format?: string;
    q?: string;
    refine?: string;
    row?: number;
    sort?: string;
    start?: number;
}
