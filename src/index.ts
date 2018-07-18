import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as express from 'express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server);

  const healthRouter = express.Router();

  healthRouter.route('/')
    .get((req, res) => {
      res.json({ message: 'Application started' });
    });

  server.use(healthRouter);

  await app.listen(3000);
}
bootstrap();
