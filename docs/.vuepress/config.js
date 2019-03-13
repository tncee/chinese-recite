module.exports = {
  title: '必背古诗词',
  base: '/chinese-recite/',
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'tncee/chinese-recite',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'tncee/chinese-recite',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
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