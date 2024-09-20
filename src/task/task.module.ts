/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { LoggerModule } from 'src/logger/logger.module';


@Module({
  providers: [TaskService],
  imports:[LoggerModule.register('Task')]
})
export class TaskModule {}
