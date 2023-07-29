import type { ValorantApi } from '..';
interface SendRequestOptions {
    url: string;
    method: 'GET' | 'POST';
    params?: object;
    body?: object;
}
export declare class Request {
    core: ValorantApi;
    constructor(core: ValorantApi);
    send<T = any>(options: SendRequestOptions): Promise<T>;
}
export {};
