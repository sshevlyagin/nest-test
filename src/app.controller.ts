import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload')
  postUpload(@Body() requestBody: { input_png_blob_string: string }): string {
    return requestBody.input_png_blob_string.length.toString();
  }
  @Post('uploadAlt')
  postUploadX(@Body() requestBody: { input_png_blob_string: string }): string {
    return requestBody.input_png_blob_string.length.toString();
  }
}
