/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class TaskService {

  constructor(private readonly loggerService: LoggerService) {}

  private readonly logger = new Logger(TaskService.name);

  @Cron('* * * * * *')
  handleCron() {
    this.loggerService.log("Called when the second is 45");
    this.logger.debug('Called when the second is 45');
  }
  
}
