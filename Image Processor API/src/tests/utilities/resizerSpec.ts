import resizeImage from "../../utilities/resizer";

let validFileName = "image";
let invalidFileName = "notValid.jpg";

describe("Image resize function", () => {
  it("should pass if all params are right", async () => {
    await expectAsync(resizeImage(validFileName, "300", "300")).toBeResolved();
  });

  it("should throw an error if width or height are not numbers", async () => {
    await expectAsync(
      resizeImage(validFileName, "string", "[]")
    ).toBeRejectedWithError("Height and width should exist and should be numbers");
  });

  it("should throw an error if file do not exist", async () => {
    await expectAsync(
      resizeImage(invalidFileName, "300", "300")
    ).toBeRejectedWithError("file not found");
  });
});
