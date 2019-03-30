---
title: 高中
---
高中
<div class="item-list">
    <router-link :to="page.path" v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" class="item">
        {{page.title}}
        <br>
        ---
    </router-link>
</div>