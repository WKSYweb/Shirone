import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 * 文案来自 https://sssr7844.cc.cd 的作者资料与页头入口。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "sssr7844",
	bio: "某不知名Linux下游开发者；某自由开源软件倡导者；现居深圳市。",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/WKSYweb/",
		},
		{
			name: "网盘",
			icon: "material-symbols:cloud-outline",
			url: "https://pan.sssr7844.cc.cd/",
		},
		{
			name: "个人主页",
			icon: "material-symbols:account-circle-outline",
			url: "https://me.sssr7844.cc.cd/",
		},
		{
			name: "RSS",
			icon: "material-symbols:rss-feed",
			url: "/rss.xml",
		},
	],
});
