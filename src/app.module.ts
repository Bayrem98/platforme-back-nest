import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CurrentUserInterceptor } from './auth/user.interceptor';
import { BookModule } from './book/book.module';
import { UploadModule } from './upload/upload.module';
import { TableModule } from './table/table.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/platdb'),
    UserModule,
    AuthModule,
    BookModule,
    UploadModule,
    TableModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInterceptor,
    },
  ],
})
export class AppModule {}
