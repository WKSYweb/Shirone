---
title: "Mobox兼容层"
published: 2026-07-08
description: "想在手机上跑Windows游戏？Mobox把Box64、Wine、DXVK/VirGL全塞进安卓里了。 傻瓜式安装，存储直通Z盘，绑核改环境变量全能调。 别怕X11开局卡，放置几天丝滑如丝。 打破生态壁垒，你"
tags: ["Android", "Linux", "兼容"]
category: "兼容性"
draft: false
---

开箱Mobox兼容层，专为在Android上运行Windows程序

## 1. Mobox介绍

工作原理：

内置了

- Box64（amd64→arm64，CPU指令集）

- Wine（Windows可执行程序→Linux可执行程序）

- 各类转译[VirGL，DXVK等]（Windows DirectX→OpenGL，Vulkan）

- InputBridge Addons（e，作用不大）

---

## 2. 安装

按照官方的说法就行了，简单到爆

---

## 3. 注意事项

1. 一开始 x11 会有点卡，但没关系，放下，几天不动就会好。

1. 手机存储的目录被挂载在了 `Z:/home/storage/shared`

    [![](https://s41.ax1x.com/2026/07/08/pmDRfHg.jpg)](https://imgchr.com/i/pmDRfHg)
  

1. 可以进行的一些优化

- 安装一些加强兼容层，例如wine mono

        [![](https://s41.ax1x.com/2026/07/08/pmDRI4s.jpg)](https://imgchr.com/i/pmDRI4s)
      

- 个性化调整设置，例如绑定CPU核心，切换VirGL版本，更改环境变量等

        [![](https://s41.ax1x.com/2026/07/08/pmDRbvV.jpg)](https://imgchr.com/i/pmDRbvV)

        [![](https://s41.ax1x.com/2026/07/08/pmDRLuT.jpg)](https://imgchr.com/i/pmDRLuT)
      

最后就可以在手机上开玩Windows游戏/Windows软件了

[![](https://s41.ax1x.com/2026/07/08/pmDRxUJ.jpg)](https://imgchr.com/i/pmDRxUJ)

[![](https://s41.ax1x.com/2026/07/08/pmDW981.jpg)](https://imgchr.com/i/pmDW981)

  

  

---

**打破生态壁垒，在安卓手机上畅玩Windows游戏吧！**
