import path from 'path';
import { Application, Request, Response } from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../config/webpack.config.dev.js';

export default function setupDev(app: Application) {
  const { publicPath, path: outputPath } = config.output;
  const compiler: webpack.Compiler = webpack(config as webpack.Configuration);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath,
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  // webpackDevMiddleware uses memory-fs internally to store build
  // https://github.com/jantimon/html-webpack-plugin/issues/145#issuecomment-170554832
  const fs = middleware.fileSystem;
  app.get('*', (req: Request, res: Response) => {
    fs.readFile(path.join(outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      }
      else {
        res.send(file.toString());
      }
    });
  });
};
