# Anime Portal
二游工具导航

本项目使用 WebStorm 开发，VS Code 用户可能需要调整。

## 如何添加工具？

按如下步骤添加后提交 PR，在确认信息无误后即可被合入。
### 添加新的公司
如果一个游戏的国服不是代理而是公司直营，那么可以添加一个新的公司  

以鹰角为例子：  
你需要先获取到游戏公司的 Logo 并将其命名为公司的英文名，例如鹰角为 HyperGryph.png  
在 `src/companies/` 中以公司的英文名创建一个 `.vue` 文件，例如鹰角为 HyperGryph.vue  
文件中写入下面这个模板：
```vue
<script>
export default {
    id: 1000000, // 公司 ID，七位数，只允许变更百万位到亿位的数字，即最多定义 1000 个公司，最后一个公司的 ID 为 999000000
    name: '鹰角网络（HyperGryph/GryphLine）', // 在网页中显示的名称，先写中文名，括号内写英文名，如果海外运营公司的名称与国内运营有区别同时都要写
    slogan: '致力于构建独一无二的世界', // 公司的 slogan，可选，如果没有则留空或直接不填
    enName: 'Hypergryph', // 公司的英文名，一定要和 Logo 的命名一样，用于显示图标
    website: 'https://www.hypergryph.com', // 公司的官网
    games: [] // 游戏列表
}
</script>
```

### 添加新的游戏
以鹰角的明日方舟为例子，你需要获取到其 Icon，以游戏的英文名命名后放置在 `public/icons` 文件夹中，将下面这个模板添加在公司的 games 数组中：
```vue
{
    id: 1001000, // 游戏的 ID，在公司 ID 基础上添加，只允许修改千位到十万位的数字，即一个公司最多定义 1000 个游戏，最后一个游戏的 ID 为 1999000
    name: '明日方舟（Arknights）', // 在网页中显示的名称，先写中文全名，括号内写英文全名
    enName: 'Arknights', // 游戏的英文名，需要与 Icon 的命名一致，用于显示图标
    tools: [] // 工具列表
}
```

### 添加新的工具
Icon 可选，如果有 Icon 要放置在如下路径：`public/icons/{company}/{game}/{tool}.png`

以明日方舟的一图流工具为例子，需要将 Icon 放置在 `public/icons/hypergryph/arknights/yituliu.png`
```vue
{
    id: 1001001, // 工具的 ID，在游戏 ID 基础上添加，只允许修改个位到百位的数字，即一个游戏最多定义 1000 个工具，最后一个工具的 ID 为 1001999
    name: '明日方舟一图流', // 网页中显示的名称
    icon: 'hypergryph/arknights/yituliu', // 以 public/icons 为根目录定位到图片的位置：{company}/{game}/{tool}
    description: '明日方舟材料价值计算、性价比计算，以及攒抽计算等其它小工具。', // 工具的简介
    tags: ['刷图推荐', '材料价值', '商店性价比', '礼包性价比', '攒抽计算', 'box分析', '大数据统计'], // 工具的标签
    link: 'https://example.com/arknights-tool' // 工具的网页链接
}
```