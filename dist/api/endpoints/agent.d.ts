import { ValorantApi } from "..";
interface GetAgentsOptions {
    language?: string;
    isPlayableCharacter?: boolean;
}
interface AgentByUuidOptions {
    uuid: string;
    language?: string;
}
export declare class Agent {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getAgents(options?: GetAgentsOptions): Promise<any>;
    agentByUuid(options: AgentByUuidOptions): Promise<any>;
}
export {};
