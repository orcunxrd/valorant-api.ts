import { ValorantApi } from "..";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
import { AgentByUuidResponse, GetAgentsResponse } from "../responses";
export declare class Agents {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getAgents(options?: GetRequestOptions): Promise<GetAgentsResponse>;
    agentByUuid(options: GetRequestByUuidOptions): Promise<AgentByUuidResponse>;
}
