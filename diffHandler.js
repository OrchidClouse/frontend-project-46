import fs from 'fs'
function gay(file1,file2){
    const arr = (JSON.parse(fs.readFileSync(file1,'utf-8')))
    const arr1 = (JSON.parse(fs.readFileSync(file2,'utf-8')))
    const test = []
    console.log(arr)
    console.log(arr1)
    return test
}
export default gay