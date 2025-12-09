<script>
export default {
  id: 3000000,
  name: '库洛',
  slogan: '“挑战即伟大”',
  enName: 'KuroGames',
  website: 'https://www.kurogames.com',
  games: [
    {
      id: 3001000,
      name: '战双帕弥什（Punishing: Gray Raven）',
      enName: 'PunishingGrayRaven',
      tools: [
        {
          id: 3001001,
          name: 'GrayRavens Wiki',
          icon: 'kurogames/punishing_gray_raven/grayravens_wiki',
          description: '战双帕弥什粉丝 Wiki',
          tags: ['Wiki', '百科'],
          link: 'https://grayravens.com/wiki'
        },
        {
          id: 3001002,
          name: 'Huaxu',
          icon: 'kurogames/punishing_gray_raven/huaxu',
          description: '玩家信息查询',
          tags: ['开盒', '剧情'],
          link: 'https://huaxu.app'
        }
      ]
    },
    {
      id: 3002000,
      name: '鸣潮（Wuthering Waves）',
      enName: 'WutheringWaves',
      tools: [
        {
          id: 3001002,
          name: 'WuWa Tracker',
          icon: 'kurogames/wuthering_waves/wuwa_tracker',
          description: '多功能综合性鸣潮工具',
          tags: ['抽卡分析', '成就管理'],
          link: 'https://wuwatracker.com'
        },
        {
          id: 3001002,
          name: 'WuWa Flex',
          icon: 'kurogames/wuthering_waves/wuwaflex',
          description: '生成角色数据卡片',
          tags: ['数据展示'],
          link: 'https://wuwaflex.com'
        },
        {
          id: 3001003,
          name: 'ok-ww',
          icon: 'kurogames/wuthering_waves/ok_ww',
          description: '一个基于图像识别的鸣潮自动化程序，支持后台运行，基于 ok-script 开发。',
          tags: ['自动化', '<red>违反用户协议'],
          link: 'https://github.com/ok-oldking/ok-wuthering-waves'
        }
      ]
    }
  ]
}
</script>