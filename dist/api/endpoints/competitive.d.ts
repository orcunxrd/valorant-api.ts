import { ValorantApi } from "..";
interface GetCompetitiveTiersOptions {
    language?: string;
}
interface CompetitiveTierByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Competitive {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCompetitiveTiers(options?: GetCompetitiveTiersOptions): Promise<any>;
    competitiveTierByUuid(options: CompetitiveTierByUuidOptions): Promise<any>;
}
export {};
