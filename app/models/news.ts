import { marked } from "marked";

export interface NewsItem {
	id: string;
	date: string;
	title: string;
	content: string;
	htmlContent: string;
}

function parseFrontMatter(mdContent: string) {
	const match = mdContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) {
		return {
			metadata: {} as Record<string, string>,
			content: mdContent,
		};
	}

	const [, yamlStr, content] = match;
	const metadata: Record<string, string> = {};
	yamlStr.split("\n").forEach((line) => {
		const parts = line.split(":");
		if (parts.length >= 2) {
			const key = parts[0].trim();
			const value = parts.slice(1).join(":").trim();
			metadata[key] = value;
		}
	});

	return {
		metadata,
		content,
	};
}

// Vite の import.meta.glob を用いて md ファイルを一括で同期ロードする
const markdownFiles = import.meta.glob("../data/news/*.md", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

export function getNewsList(): NewsItem[] {
	const newsList: NewsItem[] = [];

	for (const [filepath, fileContent] of Object.entries(markdownFiles)) {
		const filename = filepath.split("/").pop() || "";
		const id = filename.replace(/\.md$/, "");

		const { metadata, content } = parseFrontMatter(fileContent);
		const htmlContent = marked.parse(content) as string;

		newsList.push({
			id,
			date: metadata.date || "",
			title: metadata.title || "",
			content,
			htmlContent,
		});
	}

	// 日付の降順（新しい順）でソート
	return newsList.sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsById(id: string): NewsItem | null {
	const list = getNewsList();
	return list.find((item) => item.id === id) || null;
}
