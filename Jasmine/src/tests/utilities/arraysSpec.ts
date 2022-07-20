import ArrayUtil from "../../utilities/arrays";
describe("concatArr tests", function () {
  const arr1 = ["ahmed", "mohammed", "yahya"];
  const arr2 = ["soma", "rokaa", "sara"];
  it("connects two arrays", () => {
    expect(ArrayUtil.concatArr(arr1, arr2)).toEqual([
      "ahmed",
      "mohammed",
      "yahya",
      "soma",
      "rokaa",
      "sara",
    ]);
  });
});
