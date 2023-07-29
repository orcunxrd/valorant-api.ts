import { ValorantApi } from "..";
import { GetThemesResponse, ThemeByUuidResponse } from "../responses";
import { GetRequestOptions, GetRequestByUuidOptions } from "../types";
export declare class Themes {
    core: ValorantApi;
    constructor(core: ValorantApi);
    getThemes(options?: GetRequestOptions): Promise<GetThemesResponse>;
    themeByUuid(options: GetRequestByUuidOptions): Promise<ThemeByUuidResponse>;
}
