import { MockMethod } from 'vite-plugin-mock'
import { ApiEnum } from '../../src/enum/ApiEnum'

export default [
  {
    url: '/api/' + ApiEnum.CURRENT_USER,
    method: 'get',
    response: () => {
      return {
        id: 1,
        name: '小谢',
        email: '2300071698@qq.com',
        sex: 1,
        avatar: '/images/xj.jpg',
        home: 'http://www.houdunren.com',
        weibo: null,
        wechat: 'houdunren2021',
        github: 'http://github.com/houdunwang',
        qq: '',
        created_at: '2019-03-13T20:50:56.000000Z',
        updated_at: '2022-10-23T15:19:54.000000Z',
      }
    },
  },
] as MockMethod[]
