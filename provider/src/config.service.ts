import { developmentConfig } from "./config/development.config";
import { productionConfig } from "./config/production.config";
import dotenv from 'dotenv'
import path from 'path';
dotenv.config({path:path.join(__dirname,'../.env')}) //去tsconfig.json配置 "esModuleInterop": true才能直接用dotenv 和path接收所有导出

export const ConfigService = {
    provide: 'ConfigService',
    useValue: process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig
}