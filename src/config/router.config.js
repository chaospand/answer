// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout ,AnswerLayout} from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

 {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [


  {
    path: '/',
    component: AnswerLayout,
    hidden: true,
    children: [
      {
        path: '/',
        name: 'answer',
        component: () => import('@/views/answer/Answer')
      },
      {
        path: '/answer/list',
        name: 'answerlist',
        component: () => import('@/views/answer/AnswerList')
      }
  ]
  }

]
