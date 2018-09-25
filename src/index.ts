import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as express from 'express';

import * as MongoInMemory from 'mongo-in-memory';

const mongoServerInstance = new MongoInMemory(); // DEFAULT PORT is 27017

mongoServerInstance.start((error, config) => {

  if (error) {
    console.error(error);
  } else {
  // callback when server has started successfully

    console.log('HOST ' + config.host);
    console.log('PORT ' + config.port);

    const mongouri = mongoServerInstance.getMongouri('test');
  }

});

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, server);

  await app.listen(3000);
}
bootstrap();
