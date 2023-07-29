import { ValorantApi } from "..";
interface GetCeremoniesOptions {
    language?: string;
}
interface CeremonyByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Ceremony {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getCeremonies(options?: GetCeremoniesOptions): Promise<any>;
    ceremonyByUuid(options: CeremonyByUuidOptions): Promise<any>;
}
export {};
