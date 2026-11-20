/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "AZERL7 的博客",
		imgurl:
			"https://cravatar.cn/avatar/50ce448deff6186c5cef3edc6f63211056de2e313a2a7c2be1f8980155caf709?s=192&d=retro&r=g",
		desc: "a litle world for you",
		siteurl: "https://blog.azerl7.dpdns.org",
		tags: ["技术之最"],
	},
	{
		id: 2,
		title: "Norcleeh's Site",
		imgurl: "https://nocp.space/static/icon.png",
		desc: "由一条咸鱼搭建的网站",
		siteurl: "https://nocp.space/",
		tags: ["技术之最"],
	},
	{
		id: 3,
		title: "居正博客",
		imgurl: "https://blog.skyju.cc/img/avatar_hu_de1ebe2aa3f5e67d.jpg",
		desc: "大道至简",
		siteurl: "https://blog.skyju.cc/",
		tags: ["技术之最"],
	},
	{
		id: 4,
		title: "星河避难所",
		imgurl: "https://cdn.hejunjie.life/avatar.jpg",
		desc: "写代码，也写自己",
		siteurl: "https://hejunjie.life/",
		tags: ["技术之最"],
	},
	{
		id: 5,
		title: "冷汐的杂货铺",
		imgurl: "https://lengxiqwq.com/avatar-256.webp",
		desc: "你好谢谢小笼包再见",
		siteurl: "https://lengxiqwq.com",
		tags: ["新锐之火"],
	},
	{
		id: 6,
		title: "桜鵞のすみか",
		imgurl: "https://retmon.cc/pic/head.jpg",
		desc: "开源未来！",
		siteurl: "https://retmon.cc",
		tags: ["新锐之火"],
	},
	{
		id: 7,
		title: "热忠于的博客",
		imgurl: "https://zooyoo.top/img/l.webp",
		desc: "一隅书斋，半盏清欢",
		siteurl: "https://zooyoo.top/",
		tags: ["新锐之火"],
	},
	{
		id: 8,
		title: "HJZ的博客",
		imgurl:
			"https://blog.hjz0713.cn/wp-content/uploads/2026/08/1787393316-87_avatar_middle.jpg",
		desc: "Never stop discovering!",
		siteurl: "https://blog.hjz0713.cn",
		tags: ["散落的烟火"],
	},
	{
		id: 9,
		title: "lcrworld",
		imgurl: "https://lcrworld.xyz/default-avatar.jpeg",
		desc: "分享技术、生活与思考",
		siteurl: "http://lcrworld.xyz",
		tags: ["散落的烟火"],
	},
	{
		id: 10,
		title: "小曦的园子",
		imgurl: "https://img.xiaoxi.ac.cn/logo.png",
		desc: "打理好自己的小园子",
		siteurl: "https://xiaoxi.ac.cn",
		tags: ["散落的烟火"],
	},
	{
		id: 11,
		title: "拾柒",
		imgurl: "https://www.s17.cn/logo.png",
		desc: "奇奇怪怪。",
		siteurl: "https://www.s17.cn",
		tags: ["散落的烟火"],
	},
	{
		id: 12,
		title: "朝朝听雨",
		imgurl: "https://rainzt.cn/zzty.png",
		desc: "效率工具与 AI 工程化开发者，记录技术笔记、项目复盘与商业化思考。",
		siteurl: "https://rainzt.cn/",
		tags: ["散落的烟火"],
	},
	{
		id: 13,
		title: "木头堆栈",
		imgurl: "https://files.kamt.cn/avatar/avatar.png",
		desc: "kamto's stack",
		siteurl: "https://blog.kamt.cn/",
		tags: ["散落的烟火"],
	},
	{
		id: 14,
		title: "李锋镝的博客",
		imgurl: "https://www.lifengdi.com/logo.png",
		desc: "星光不问赶路人，时光不负有心人。",
		siteurl: "https://www.lifengdi.com/",
		tags: ["散落的烟火"],
	},
	{
		id: 15,
		title: "博客大联盟",
		imgurl: "https://bo.ke/favicon.ico",
		desc: "聚合友链",
		siteurl: "https://bo.ke/",
		tags: ["聚合友链"],
	},
	{
		id: 16,
		title: "LiMhy'Blog",
		imgurl: "https://omg.46vip.top/2026/06/omg0611lt.webp",
		desc: "记录小生活小美好",
		siteurl: "https://i.lilog.cn",
		tags: ["新朋友"],
	},
	{
		id: 17,
		title: "UPXUU BLOG",
		imgurl: "https://upxuu.com/images/me.jpg",
		desc: "逐光而上!",
		siteurl: "https://upxuu.com/",
		tags: ["新朋友"],
	},
	{
		id: 18,
		title: "寒士杰克",
		imgurl: "https://www.hansjack.com/favicon.ico",
		desc: "喜欢捣鼓，不断进步！",
		siteurl: "https://www.hansjack.com",
		tags: ["新朋友"],
	},
	{
		id: 19,
		title: "林子浩的日记",
		imgurl: "https://linzihao.cn/img/touxiang.jpg",
		desc: "一个努力写日记的博客站长。",
		siteurl: "https://lzh1.cn",
		tags: ["新朋友"],
	},
	{
		id: 20,
		title: "没吃饱的天镜镜",
		imgurl: "https://blog.8765777.xyz/favicon.ico",
		desc: "诺贝尔奖关注者，文学奖读者",
		siteurl: "https://blog.8765777.xyz",
		tags: ["新朋友"],
	},
	{
		id: 21,
		title: "躬行笔记",
		imgurl: "https://www.fuzhoupyy.work/usr/themes/blog/images/tx.jpg",
		desc: "工具箱+博客",
		siteurl: "https://www.fuzhoupyy.work/",
		tags: ["新朋友"],
	},
	{
		Id: 22,
		title: "昭鸢笺",
        siteurl: "https://blog.mibase.top",
        imgurl: "https://blog.mibase.top/img/miro.jpg",
        desc: "昭有明朗向远之意，鸢乘风而上，笺以载笔墨见闻",
		tags: ["技术之最"],
    },
];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
