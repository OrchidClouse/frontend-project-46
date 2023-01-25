// import parseAndDiff from './diffHandler.js'
import _ from 'lodash'
// let result = "{\n";
//     f1.forEach((key) => {
//         if(Object.hasOwn(f2, key)){
//             if(f1[key] === f2[key]){result += `  ${key}: ${f1[key]}\n`;}
//             else if(f1[key] !== f2[key]){
//                 result += `- ${key}: ${f1[key]}\n`;
//                 result += `+ ${key}: ${f2[key]}\n`;
//             }
//         }else{
//             result += `- ${key}: ${f1[key]}\n`;
//         }});
//     Object.keys(f2).forEach((key2) => {
//         if (!Object.hasOwnProperty.call(f1,key2)) result += `+ ${key2}: ${f2[key2]}\n`;
//     });
//     console.log(result);
//     console.log("}");
//     return result;


function parser(f1,f2){
    let res = '{\n';
    const keys = _.union(_.keys(f1), _.keys(f2))
    const sortedKeys = _.sortBy(keys)
    const result = sortedKeys.map((key) => {
        if(!_.has(f1, key)){
            return {name: key, value: f2[key]}
        }else if((!_.has(f2, key))){
            return {name: key, value: f1[key]}
        }
        // console.log(f1[key])
        // console.log(f2[key])
    })
    // console.log(sortedKeys)
    console.log(keys)
    console.log(result)
    return result
}
export default parser