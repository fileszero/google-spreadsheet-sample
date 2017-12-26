/** Declaration file generated by dts-gen */

export class GoogleSpreadsheet {
    constructor(ss_key: string, auth_id?: string, options?: {});
    /**
     * Uses a service account email and public/private key to create a token to use to authenticated requests.
     * Normally you would just pass in the result of requiring the json file that google generates for you when you create a service account.
     * https://github.com/theoephraim/node-google-spreadsheet#googlespreadsheetuseserviceaccountauthaccount_info-callback
     * @param account_info
     * @param callback
     */
    useServiceAccountAuth(account_info: {}, callback: (err: {}) => void): void;
    /** Use an already created auth token for all future requets. */
    setAuthToken(id: string): void;
    /** Get information about the spreadsheet */
    getInfo(callback: (err: {}, ss_data: SpreadsheetData) => void): void;

    getRows(worksheet_id: string, options: {}, callback: (err: {}, rows: SpreadsheetRow[]) => void): void;
}

declare class SpreadsheetData {
    /** the URL/id as returned from google */
    id: string;
    /** the title of the document */
    title: string;
    /** last updated timestamp */
    updated: Date;
    /** auth info in an object */
    author: {
        /**  author name */
        name: string;
        /** author email */
        email: string;
    }
    /** an array of SpreadsheetWorksheet objects */
    worksheets: SpreadsheetWorksheet[]
}
declare class SpreadsheetWorksheet {
    /** the URL for the sheet */
    url: string;
    /** the ID of the sheet */
    id: string;
    /** the title(visible on the tabs in google's interface) */
    title: string;
    /** number of rows */
    rowCount: number;
    /** number of columns */
    colCount: number;

    getRows(options: {}, callback: (err: {}, rows: SpreadsheetRow[]) => void): void;
}
declare class SpreadsheetRow { }

