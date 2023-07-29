import { ValorantApi } from "..";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
import { AgentByUuidResponse, GetAgentsResponse } from "../responses";

export class Agents {
    public core: ValorantApi;

    constructor(core: ValorantApi) {
        this.core = core;
    }

    async getAgents(options: GetRequestOptions = {}) {
        return await this.core.request.send<GetAgentsResponse>({
            url: 'https://valorant-api.com/v1/agents',
            method: 'GET',
            params: options,
        });
    }

    async agentByUuid(options: GetRequestByUuidOptions) {
        return await this.core.request.send<AgentByUuidResponse>({
            url: `https://valorant-api.com/v1/agents/${options.uuid}`,
            method: 'GET',
            params: options
        })
    }
}