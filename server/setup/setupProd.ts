import path from 'path';
import compression from 'compression';
import express, { Application, Request, Response } from 'express';

export default function setupProd(app: Application) {
  const outputPath = path.resolve(process.cwd(), 'dist');
  const publicPath = '/';
  app.use(compression());
  app.use(publicPath, express.static(outputPath));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(outputPath, 'index.html'));
  });
};
