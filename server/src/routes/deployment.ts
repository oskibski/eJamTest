import { Router } from 'express';

export const deployment = Router();

deployment.get('/', async (req, res) => {
  const deployment = await req.locals.models.Deployment.find().exec();
  return res.send(deployment);
});

deployment.get('/:deploymentId', async (req, res) => {
  const deployment = await req.locals.models.Deployment.findById(
    req.params.deploymentId,
  );
  return res.send(deployment);
});

deployment.post('/', async (req, res) => {
  const deployment = await req.locals.models.Deployment.create({
    url: req.body.url,
    templateName: req.body.templateName,
    version: req.body.version,
    deployedAt: req.body.deployedAt,
  });

  return res.send(deployment);
});

deployment.delete('/:deploymentId', async (req, res) => {
  const deployment = await req.locals.models.Deployment.findById(
    req.params.deploymentId,
  );

  let result = null;
  if (deployment) {
    result = await deployment.remove();
  }

  return res.send(result);
});
