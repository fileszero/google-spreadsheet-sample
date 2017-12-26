import * as config from "config";
import * as gs from "google-spreadsheet";
const GoogleSpreadsheet: any = require("google-spreadsheet");

const testsheet: gs.GoogleSpreadsheet = new GoogleSpreadsheet("1XSLK5DIHTC3zL0GxhL4Z4LZXb0PhhBiJZzT7JMqnR3Q");
const credentials: {} = config.get("google-spreadsheet.service_account");
// const auth: {} = require("../../config/DocTools-fec380e3b8a9.json");
console.log(credentials);

testsheet.useServiceAccountAuth(credentials, (err) => {
    // console.log(err);
    testsheet.getInfo((err, data) => {
        // console.log(data);
        for (const sheet of data.worksheets) {
            console.log(sheet.title);
            sheet.getRows({}, (err, rows) => {
                for (const row of rows) {
                    console.log(row);
                }
            });
        }
    });
});