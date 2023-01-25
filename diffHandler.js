import fs from "fs";
import _ from "lodash";
import parser from '../frontend-project-46/parser.js'
function sortbyabc(obj) {
    let sorted = {};
    let keys = _.sortBy(Object.keys(obj));
    for (let i = 0; i < keys.length; i += 1) {
        let key = keys[i];
        if (typeof obj[key] === "object" && obj[key] !== null) {
            sorted[key] = sortbyabc(obj[key]);
        } else {
            sorted[key] = obj[key];
        }}
    return sorted;
}
function parseAndDiff(file1,file2){
    const f1 = (sortbyabc(JSON.parse(fs.readFileSync(file1,"utf-8"))));
    const f2 = (sortbyabc(JSON.parse(fs.readFileSync(file2,"utf-8"))));
    return parser(f1,f2)
}
export default parseAndDiff;
