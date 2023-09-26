import {http} from '@/plugins/axios'
type ResponseData ={
    user:UserModel,
    token:string
}

export function login(data:any){
    return http.request<ResponseData>({
        url:'/login',
        method:'post',
        data
    })
}