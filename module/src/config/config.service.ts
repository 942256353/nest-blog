import { Inject, Injectable, Optional } from '@nestjs/common';
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

@Injectable()
export class ConfigService {
    //config={} as any;
    constructor(@Optional() private config={},@Inject('CONFIG_OPTIONS') private options:{path:string}) {
    //    const options = {path:path.resolve(__dirname,'../configure')}
     
       readdirSync(options.path).map(async(file)=>{
        if(file.slice(-2)==='js'){
            const module = await import(path.resolve(options.path,file))
            // this.config=Object.assign(this.config,module.default())
            this.config = {...this.config,...module.default()}
        }
       })
    }
    get(path:string){
        const paths = path.split('.')
        return  paths.reduce((config,name)=>config[name],this.config)
    }
}
