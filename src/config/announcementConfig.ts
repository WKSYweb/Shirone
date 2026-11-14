import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 公告栏配置
 * 组件显示由 sidebarConfig 统一控制
 * 文案来自 https://sssr7844.cc.cd 的站点描述。
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "Just for fun", // 公告标题，填空使用 i18n 字符串 Key.announcement
		content:
			"讨论关于技术、自由开源、我的世界、C++以及一些其它我分享的事情。", // 公告内容
		closable: true, // 允许用户关闭公告
		link: {
			enable: true, // 启用链接
			text: "关于我", // 链接文本
			url: "/about/", // 链接 URL
			external: false, // 站内链接
		},
	},
);
