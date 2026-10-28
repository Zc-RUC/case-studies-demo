# 精选项目案例 Demo

独立预览网站，用于展示 **Lab Mapper、DDL.MISSION、Author Sourcing、Healthy Meals、Daily Paper Briefing** 五个项目案例，不修改原个人主页。

在线地址：https://zc-ruc.github.io/case-studies-demo/

## 内容

- `index.html`：五个案例的导览与成果摘要。
- `lab-mapper.html`：实验室链接到结构化人才 Mapping，含 500+ 人及数倍提速成果。
- `ddl-mission.html`：真实项目截图、自然语言任务录入、倒计时、通知与多端同步。
- `author-sourcing.html`：论文元数据、作者身份消歧、资料补全与研究匹配。
- `healthy-meals.html`：真实餐单界面、商家比价、记账、体重趋势、周报与云端同步。
- `daily-paper-briefing.html`：每日论文筛选、摘要、作者线索与后续行动。
- `styles.css` / `script.js`：响应式视觉与可重放流程演示。

## 展示依据

- DDL.MISSION 和 Healthy Meals 使用项目仓库中的真实界面截图。
- Lab Mapper、Author Sourcing 和 Daily Paper Briefing 使用各自 Skill 包中的官方 `example-prompt` 与 `example-output`。
- 流程演示为本地交互，不发起网络请求；页面明确标注示例数据，不冒充真实候选人或实时产品后台。

## 本地预览

零依赖、零构建，直接用浏览器打开 `index.html`，或在此目录运行：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:8765/`。
