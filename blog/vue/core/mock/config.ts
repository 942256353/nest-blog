import { MockMethod } from 'vite-plugin-mock'
import { ApiEnum } from '../../src/enum/ApiEnum'

export default [
  {
    url: '/api/' + ApiEnum.BASE_CONFIG,
    method: 'get',
    response: () => {
      return {
        base: {
          name: '小谢',
        },
        copyright: {
          ad: '小谢 人人做后盾',
          weixin: 'houdunren2021',
          email: '2300071698@qq.com',
          icp: '京ICP备99999999-8',
          showXjAvatar: false,
          other: 'Copyright © houdunren.com All Rights Reserved',
        },
      }
    },
  },
] as MockMethod[]
