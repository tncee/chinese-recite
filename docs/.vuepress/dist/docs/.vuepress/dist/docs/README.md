---
home: true
title: 首页
heroImage: /hero.png
heroText: 必备古诗词
tagline: 副标题

footer: Copyright © 2019 Nexmoe. All rights reserved.
---
<div style="display: flex; flex-direction: column">
    <div v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" style="padding: 20px 0; max-width: 33%;">
        <router-link :to="page.path">
            {{page.title}}
            <div style="color: #c2c5cd; font-size: .5rem;">{{(page.frontmatter.tags || ['无标签']).join(',  ')}}</div>
        </router-link>
    </div>
</div>