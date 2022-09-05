import fs from "fs";
import path from "path";
import sharp from "sharp";

const resizeImage = async <String>(
  fileName: string,
  height: string,
  width: string
) => {
  let heightNumber = Number.parseInt(height);
  let widthNumber = Number.parseInt(width);
  let targetFileName = `${fileName}-${width}-${height}`;
  if (isNaN(heightNumber) || isNaN(widthNumber)) {
    throw new Error("Height and width should exist and should be numbers");
  }
  let filePath = path.resolve("./assets/full/" + fileName + ".jpg");
  let fileFullPath = path.resolve("./assets/thumbnails/" + targetFileName + ".jpg");

  if (!fs.existsSync(filePath)) {
    throw new Error("file not found");
  }
  let targetPath = path.resolve(
    "./assets/thumbnails/" + targetFileName + ".jpg"
  );
  if (!fs.existsSync(fileFullPath)) {
    console.log("File was created!");

    await sharp(filePath).resize(heightNumber, widthNumber).toFile(targetPath);
  }
  return `./assets/thumbnails/${targetFileName}.jpg`;
};

export default resizeImage;
