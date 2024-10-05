# Todo List Demo

该项目为 React + Ant Design + Vite 的 Todo List 示例项目。

参考文档：
- [「AI + 全栈开发」第 1 章：从一个 Todo List 开始](https://ycndy5tax9cx.feishu.cn/wiki/X4AJwRH0jiiv4AkrYIucPvYTnrh?from=from_copylink)
- [Ant Design 官方文档](https://ant-design.antgroup.com/index-cn)
- [Vite 配置 alias](https://ycndy5tax9cx.feishu.cn/wiki/PXb9wAhTJiSQSDk9cuacBtRxnGe?from=from_copylink)

## 项目开发

这里建议使用 pnpm 作为包管理工具，如果未安装 pnpm，请先安装 pnpm。

```bash
npm install -g pnpm
```

### 项目搭建

基于 Vite 创建项目，选择 React + TypeScript 模板：
```bash
pnpm create vite todo-list-demo --template react-ts
```

安装 antd 组件库：
```bash
pnpm install antd --save
```

安装 @ant-design/icons 图标库：
```bash
pnpm install @ant-design/icons --save
```

### 安装依赖

```bash
pnpm install
```

### 启动项目

```bash
pnpm run dev
```
