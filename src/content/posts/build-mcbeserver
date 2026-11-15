---
title: "搭建自己的基岩版Minecraft服务器"
published: 2026-08-12
description: "从Arch系Nyarch下载松散文件起步，改`server.properties`踩坑`online-mode`与视距参数，内网联机验证无误后，不指望ISP公网IP，转投ChmlFrp内网穿透选深圳节点。曾在老GXDE"
tags: ["Linux", "Minecraft", "基岩版", "服务器"]
category: "我的世界"
draft: false
---

## 1.准备

首先先下载基岩版专用服务端，官网只提供最新版

虽然写着Linux仅限Ubuntu，但我目前用的Nyarch Linux（Arch Linux下游）也是可以的，这不涉及发行版专有的包管。（这玩意都不是个包，就是个松散文件

![](https://s41.ax1x.com/2026/08/12/pmqzJCF.png)

也可使用旧版（Minecraft Wiki上有存档），此处展示`基岩版26.32`

![](https://s41.ax1x.com/2026/08/12/pmLpXNV.png)

## 2.配置

在服务端中有一个文件叫`server.properties`，里面定义了广泛的参数。**务必修改，否则连进都进不去**

![](https://s41.ax1x.com/2026/08/12/pmL9njH.jpg)

下面是一个示例：

```
#========== 服务器基础设置 ==========
# 服务器显示名称（支持颜色代码 §）
server-name=我的基岩世界
# 默认游戏模式：survival（生存）, creative（创造）, adventure（冒险）
gamemode=survival
# 是否强制所有玩家使用上方设定的游戏模式（true=强制）
force-gamemode=false
# 难度：peaceful（和平）, easy（简单）, normal（普通）, hard（困难）
difficulty=normal
# 是否允许作弊（开启后可使用 /give 等命令）
allow-cheats=false
# 最大玩家数量
max-players=20
# 正版验证（true=仅允许正版Xbox账户登录，false=允许离线/局域网直连）
online-mode=true
# 是否启用白名单（需配合 allowlist.json 使用）
allow-list=false

#========== 网络与端口设置 ==========
# IPv4 端口（默认 19132）
server-port=19132
# IPv6 端口（默认 19133）
server-portv6=19133
# 是否在局域网中广播（方便在游戏内“好友”栏发现服务器）
enable-lan-visibility=true
# 是否启用 Rcon 远程控制（需配合 rcon.password 文件）
enable-rcon=false
# Rcon 端口（通常与服务器端口一致）
rcon-port=19132

#========== 世界与存档设置 ==========
# 世界存档文件夹名称（对应 /worlds/ 下的文件夹）
level-name=BedrockWorld
# 世界种子（留空则随机生成）
level-seed=
# 世界类型：DEFAULT（无限）, FLAT（超平坦）, LEGACY（旧版有限世界）
level-type=DEFAULT
# 是否强制加载指定材质包（资源包）
texturepack-required=false

#========== 性能与视距设置 ==========
# 视野距离（区块数量，基岩版建议 10~32，过高吃性能）
view-distance=32
#  ticking 距离（以玩家为中心加载的区块范围，建议 4~8）
tick-distance=4
# 玩家空闲超时踢出时间（分钟，0=不踢出）
player-idle-timeout=30
# 服务器最大使用线程数（0=自动，按CPU核心数设置可优化性能）
max-threads=8

#========== 反作弊与移动校验 ==========
# 服务端权威移动处理：server-auth（严格反瞬移）, client-auth（流畅但易作弊）
server-authoritative-movement=server-auth
# 移动分数阈值（检测作弊灵敏度，默认20）
player-movement-score-threshold=20
# 移动方向检测阈值（默认0.85）
player-movement-action-direction-threshold=0.85
# 服务端权威方块破坏（true=防止快速破坏外挂）
server-authoritative-block-breaking=true
# 是否纠正客户端移动数据（true=强制拉回违规玩家位置）
correct-player-movement=false

#========== 其他杂项 ==========
# 压缩阈值（数据包小于1KB不压缩，默认1）
compression-threshold=1
# 是否启用内容日志（用于插件调试）
content-log-file-enabled=false
# 是否允许向巨硬（Microsoft）发送遥测数据
emit-server-telemetry=false
```

可按需修改。

![](https://s41.ax1x.com/2026/08/12/pmL9r5V.png)

## 3.测试

先在内网尝试联机，用内网IP，如`192.168.2.217`

若没有问题，则进行下一步

服务端应该会出现以下内容

![](https://s41.ax1x.com/2026/08/12/pmLC3L9.png)

## 4.公网映射

不要指望ISP给公网网址了，不可能的~😇（特别是ipv4

此处用的是ChmlFrp，其它供应商也大同小异，按供应商的文档或说明（README）即可

由于sssr7844比较物尽其用（其实就是抠门，所以选了免费版限制少的ChmlFrp

内网穿透节点就选离你最近的那个，或者是离你想要联机的好朋友最近的那个，由于我和我朋友都在深圳，所以此处选择深圳作为示例

![](https://s41.ax1x.com/2026/08/12/pmLC7oq.png)

## 5.总结

快和你的好朋友一起联机玩我的世界吧！（依旧恐怖地图

![](https://s41.ax1x.com/2026/08/12/pmLP0hV.jpg)

其实在这个博客建站以前，我就已经开过服务器跟朋友一起玩MC了，当时是在我的GXDE电脑上，现在我改用Nyarch Linux了。

这是当年的珍贵影像（很模糊，而且当时这个电脑不太好。

![](https://s41.ax1x.com/2026/08/12/pmLPN0s.jpg)
