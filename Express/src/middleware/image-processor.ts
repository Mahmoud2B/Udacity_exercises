import express from "express";
import resizeImage from "../utilities/resizer";
const imageProcessor = async (
  req: express.Request,
  res: express.Response,
  next: Function
) => {
  try {
    let newImagePath = await resizeImage(
      req.query["fileName"] as string,
      req.query["width"] as string,
      req.query["height"] as string
    );

    res.sendFile(newImagePath, { root: "." });
  } catch (e) {
    if (typeof e === "string") {
      res.status(400).send(e);
    } else if (e instanceof Error) {
      res.status(400).send(e.message);
    }
  }
};

export default imageProcessor;
