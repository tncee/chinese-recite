---
home: true
title: 首页
heroText: 必背古诗词
footer: Made with ❤ by TNCEE
---

<div class="item-list">
    <router-link :to="page.path" v-for="page of $site.pages.filter(item => item.path !== '/')" :key="page.key" class="item">
        {{page.title}}
        <br>
        ---
    </router-link>
</div>

<details>
<summary>HTML 5</summary>
This document teaches you everything you have to learn about HTML 5.
</details>

<style>
    .item-list {
        margin: -5px;
        margin-bottom: 10px;
    }
    .item-list::after {
        content: "";
        clear: both;
        display: table;
    }
    .item-list .item {
        float: left;
        width: calc(25% - 10px);
        margin: 5px;
        background-color: #3eaf7c;
        color: #fff;
        border-radius: 6px;
        padding: 12px 16px;
        box-sizing: border-box;
    }
    @media screen and (max-width:768px) {
        .item-list .item {
            width: calc(50% - 10px);
        }
    }
</style>
