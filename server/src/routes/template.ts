import { Router } from 'express';

export const template = Router();

template.get('/', async (req, res) => {
  const templates = await req.locals.models.Template.find().exec();
  return res.send(templates);
});

template.get('/:templateId', async (req, res) => {
  const template = await req.locals.models.Template.findById(
    req.params.templateId,
  ).exec();
  return res.send(template);
});
