import { VisitorFrequenciesLucerneChEntityBase } from '../VisitorFrequenciesLucerneChEntityBase';
import type { VisitorFrequenciesLucerneChSDK } from '../VisitorFrequenciesLucerneChSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../VisitorFrequenciesLucerneChTypes';
declare class SearchEntity extends VisitorFrequenciesLucerneChEntityBase<Search> {
    constructor(client: VisitorFrequenciesLucerneChSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
