interface DataObject {
    manifestId: string;
    branch: string;
    version: string;
    buildVersion: string;
    engineVersion: string;
    riotClientVersion: string;
    riotClientBuild: string;
    buildDate: string;
}
export interface GetVersionResponse {
    status: number;
    data: DataObject;
}
export {};
