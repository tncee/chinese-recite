module.exports = {
  title: '必备古诗词',
  description: '博客',
  base: '/chinese-recite/',
  themeConfig: {
    nav: [{
      text: '高中',
      link: '/senior/'
    }, ],
    sidebar: 'auto',
    sidebar: {
      '/senior/': [
      {
        title: '必修二',
        collapsable: false,
        children: [
          '/senior/compulsory2/氓',
          '/senior/compulsory2/采薇',
          '/senior/compulsory2/离骚',
        ]
      },
      {
        title: '必修三',
        collapsable: false,
      },
      {
        title: '必修五',
        collapsable: false,
        children: [
          '/senior/compulsory5/归去来兮辞·并序',
          '/senior/compulsory5/滕王阁序',
          '/senior/compulsory5/逍遥游',
          '/senior/compulsory5/陈情表',
        ]
      }
    ],
    },
  },
}