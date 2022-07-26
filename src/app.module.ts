import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { json } from 'express';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(json({ limit: '5mb' }))
      .forRoutes({ path: '/upload', method: RequestMethod.POST });
    consumer
      .apply(json({ limit: '10kb' }))
      .exclude({ path: '/upload', method: RequestMethod.ALL })
      .forRoutes('*');
  }
}
