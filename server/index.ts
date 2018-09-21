import express, { Application } from 'express';

import chalk from 'chalk';

const isDev = process.env.NODE_ENV !== 'production';
const host = (process.env.HOST || 'localhost');
const port: string | number = (process.env.PORT || 3000);



/** configuration
 * 1. mongoose connection
 * 2. body-parser
 * 3. api setting
 * 4. setup for dev or prod enviroment
 * Finally Open
*/


// Your api or static setting like app.use('/static', express.static(outputPath));



const setup = async () => {
  const app: Application = express();
  try {
    const setupMode = isDev ? await import('./setup/setupDev') : await import('./setup/setupProd');
    setupMode.default(app);
    // get the intended host and port number, use localhost and port 3000 if not provided
    app.listen(port as number, host, (err: string) => {
      if (err) {
        console.error(chalk.red(err));
      }
      if (isDev) {
        console.log(`Server started in Development! ${chalk.green('✓')}`);
      }
      else {
        console.log(`Server started! ${chalk.green('✓')}`);
      }
    
      console.log(`
          ${chalk.bold('Server is Running on:')}
          ${chalk.magenta(`http://${host}:${port}`)}
          ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
        `);
    });
  }
  catch (error) {
    console.error(error.message);
  }
}

setup();
