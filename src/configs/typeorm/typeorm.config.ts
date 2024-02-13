import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

config();
const configService = new ConfigService();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: 5432,
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  synchronize: true,
};
