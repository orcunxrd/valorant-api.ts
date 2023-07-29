import got from 'got';
import type { ValorantApi } from '..';

interface SendRequestOptions {
  url: string;
  method: 'GET' | 'POST';
  params?: object;
  body?: object;
}

export class Request {
  core: ValorantApi;
  
  constructor(core: ValorantApi) {
    this.core = core;
  }

  async send<T = any>(options: SendRequestOptions): Promise<T> {
    if (!options.url || !options.method) {
      throw new Error('Missing request requirements');
    }

    const requestOptions: any = {
      url: options.url,
      method: options.method,
      searchParams: options.params,
      body: options.body
    }

    const response: any = await got(requestOptions);

    try {
      return JSON.parse(response.body);
    } catch (error: any) {
      throw new Error('JSON parse error');
    }
  }
}