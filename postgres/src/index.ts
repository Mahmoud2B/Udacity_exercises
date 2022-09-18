import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import mythical_weapon_routes from "./handlers/mythical_wapons";
import users_routes from "./handlers/users";

const app = express();

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req: Request, res: Response) {
  res.send("Hello");
});

mythical_weapon_routes(app);
users_routes(app);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
