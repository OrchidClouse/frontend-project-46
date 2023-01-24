import fs from "fs";
import _ from "lodash";
function sortbyabc(obj) {
    let sorted = {};
    let keys = _.sortBy(Object.keys(obj));

    for (let i = 0; i < keys.length; i += 1) {
        let key = keys[i];
        if (typeof obj[key] === "object" && obj[key] !== null) {
            sorted[key] = sortbyabc(obj[key]);
        } else {
            sorted[key] = obj[key];
        }
    }
    return sorted;
}
function parseAndDiff(file1,file2){
    const f1 = sortbyabc(JSON.parse(fs.readFileSync(file1,"utf-8")));
    const f2 = sortbyabc(JSON.parse(fs.readFileSync(file2,"utf-8")));
    let result = "{\n";
    Object.keys(f1).forEach((key) => {
        if(Object.hasOwn(f2, key)){
            if(f1[key] === f2[key]){result += `  ${key}: ${f1[key]}\n`;}
            else if(f1[key] !== f2[key]){
                result += `- ${key}: ${f1[key]}\n`;
                result += `+ ${key}: ${f2[key]}\n`;
            }
    } else{
        result += `- ${key}: ${f1[key]}\n`;
    }});
    Object.keys(f2).forEach((key2) => {
        if (!f1.hasOwnProperty(key2)) result += `+ ${key2}: ${f2[key2]}\n`;
    });
    console.log(result);
    console.log("}");
    return result;
}
export default parseAndDiff;
