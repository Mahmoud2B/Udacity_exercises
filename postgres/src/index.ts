import express, { Request, Response } from 'express';

const app = express();

const port = 3000;

app.get('/', function (req: Request, res: Response) {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;
