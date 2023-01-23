import fs from 'fs';
import _ from 'lodash';
function sortObj(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}
function parseAndDiff(file1,file2){
    const f1 = sortObj(JSON.parse(fs.readFileSync(file1,'utf-8')))
    const f2 = sortObj(JSON.parse(fs.readFileSync(file2,'utf-8')))
    console.log('{')
    for(const keys in f1){
      if(Object.hasOwn(f2, keys)){  
        if(f1[keys] === f2[keys]) {
          console.log(`  ${keys}: ${f1[keys]}`)
        }else{
          console.log(`- ${keys}: ${f1[keys]}`)
          console.log(`+ ${keys}: ${f2[keys]}`)
        }
      }else{
        console.log(`- ${keys}: ${f1[keys]}`)
      }
    }
    console.log('}')
}
export default parseAndDiff