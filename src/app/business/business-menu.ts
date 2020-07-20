import { NbMenuItem } from '@nebular/theme';

export const BUSINESS_MENUS: NbMenuItem[] = [
    {
        title: 'home',
        link: 'as',
        icon: 'home-outline',
      },
      {
        title: '系统功能',
        group: true
      },
      {
        title: 'dashboard',
        icon: 'file-text-outline',
        expanded: true,
        children: [
          {
            title: '疫情图',
            link: '/home',
            icon: 'activity-outline',
          },
          {
            title: '专家分析',
            icon: 'people-outline'
          }
        ]
      },
      {
        title: 'dashboard',
        expanded: true,
        children: [
          {
            title: 'change'
          },
          {
            title: 'save'
          }
        ]
      }
]