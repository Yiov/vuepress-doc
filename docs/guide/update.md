# 更新及卸载

> 更新时间：2023-11-15


## 更新

### 安装ncu

::: danger 注意
已经安装过的可以直接看 [更新包](#更新包) 步骤
:::

由于直接用命令更新，不能改变 `package.json` 的内容

我更推荐用 npm-check-updates，即 `ncu`

```sh
npm i -g npm-check-updates
```

ncu可以可以检查出需更新的软件包

```sh
ncu
```


### 更新包

更新模块包版本信息


```sh
#即运行ncu -u to upgrade package.json
ncu -u
```

::: tip 说明
这时候我们的 `package.json` 里的版本都按最新的填写完毕了
:::


我们直接用命令更新安装依赖即可


:::: code-group
::: code-group-item pnpm
```sh
pnpm install
```
:::
::: code-group-item yarn
```sh
yarn install
```
:::
::: code-group-item bun
```sh
bun install
```
:::
::::





## 卸载

卸载就比较简单了，在 `package.json` 中找到包名即可


:::: code-group
::: code-group-item pnpm
```sh
pnpm uninstall 包名
```
:::
::: code-group-item yarn
```sh
yarn uninstall 包名
```
:::
::: code-group-item bun
```sh
bun uninstall 包名
```
:::
::::



::: tip 比如
pnpm uninstall vue

其中`vue` 就是包名
:::