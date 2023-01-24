import parseAndDiff from "../diffHandler";
const parsed = parseAndDiff()


test('check diffrence to equal chemy-to', () => {
    expect(parsed(file1, file2)).toBe(``)
})