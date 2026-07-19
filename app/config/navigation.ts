export interface NavItem {
	to: string;
	label: string;
	isNew?: boolean;
}

export const navigationItems: NavItem[] = [
	{ to: "/", label: "ホーム" },
	{ to: "/news", label: "お知らせ" },
	{ to: "/about", label: "コミックつくば！とは？" },
	{ to: "/events", label: "開催情報", isNew: false },
	{ to: "/contact", label: "お問い合わせ" },
];
