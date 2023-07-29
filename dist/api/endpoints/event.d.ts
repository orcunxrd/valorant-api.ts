import { ValorantApi } from "..";
interface GetEventsOptions {
    language?: string;
}
interface EventByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Event {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getEvents(options?: GetEventsOptions): Promise<any>;
    eventByUuid(options: EventByUuidOptions): Promise<any>;
}
export {};
