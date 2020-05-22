import 'dotenv/config';
import express from 'express';
import { db, models } from './models';
import * as routes from './routes';
import cors from 'cors';
import { templates } from './fixtures/templates';
import { Model, Document } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      locals: {
        models: {
          Deployment: Model<Document>;
          Template: Model<Document>;
        };
      };
    }
  }
}
// Create a new express app instance
const app: express.Application = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  req.locals = { models };
  next();
});

const setupTemplates = async () => {
  await models.Template.deleteMany({});
  for (const index in templates) {
    const templateModel = new models.Template(templates[index]);
    await templateModel.save();
  }
};

app.use('/template', routes.template);
app.use('/deployment', routes.deployment);

app.get('/', function (req, res) {
  res.send('Hello world!');
});

db().then(async () => {
  await setupTemplates();
  app.listen(process.env.PORT, () =>
    console.log(`App is listening on port ${process.env.PORT}!`),
  );
});
