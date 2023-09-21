import { registerAs } from "@nestjs/config";

export default registerAs('database',()=>({
    host: 'localhost',
    port: 3306,
    passsword:'1222314'
}))