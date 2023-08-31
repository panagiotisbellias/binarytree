import { MenuProps } from "antd";
import { IconName } from "components/General/Icon/utils/types";
import { getItem } from "components/Layouts/Menu/utils/helper";

export const MENU_ITEMS = [
	{
		name: "Colors",
		icon: "Brush",
		show: true,
		children: [
			{
				name: "Color Picker",
				url: "/colors/cp",
				icon: "Baseline",
				show: true,
			},
			{
				name: "Shades & Tints",
				url: "/colors/shades-tints",
				icon: "Layers",
				show: true,
			},
		],
	},
	{
		name: "Converter",
		icon: "Repeat",
		show: true,
		children: [
			{
				name: "Base 64",
				url: "/converter/base-64",
				icon: "Replace",
				show: true,
			},
			{
				name: "Pixel",
				url: "/converter/pixel",
				icon: "FileOutput",
				show: true,
			},
			{
				name: "JSON To TypeScript",
				url: "/converter/jtt",
				icon: "FileOutput",
				show: true,
			},
		],
	},
	{
		name: "Data",
		icon: "Database",
		show: true,
		children: [
			{
				name: "Data Generator",
				url: "/data/data-gen",
				icon: "DatabaseBackup",
				show: true,
			},
			{
				name: "Image Generator From Colors",
				url: "/data/igfc",
				icon: "Image",
				show: true,
			},
			{
				name: "Sorting",
				url: "/data/sorting",
				icon: "ArrowUpNarrowWide",
				show: true,
			},
		],
	},
	{
		name: "List",
		icon: "List",
		show: true,
		children: [
			{
				name: "Blog",
				url: "/list/blog",
				icon: "Keyboard",
				show: true,
			},
			{
				name: "Book",
				url: "/list/book",
				icon: "BookOpen",
				show: true,
			},
			{
				name: "Course",
				url: "/list/course",
				icon: "GraduationCap",
				show: true,
			},
			{
				name: "Github",
				url: "/list/github",
				icon: "Github",
				show: true,
			},
			{
				name: "Icon",
				url: "/list/icon",
				icon: "Square",
				show: true,
			},
			{
				name: "Movie",
				url: "/list/movie",
				icon: "Clapperboard",
				show: true,
			},
			{
				name: "Platform",
				url: "/list/platform",
				icon: "Server",
				show: true,
			},
			{
				name: "Plugin",
				url: "/list/plugin",
				icon: "Plug",
				show: true,
			},
			{
				name: "Tool",
				url: "/list/tool",
				icon: "Wrench",
				show: true,
			},
			{
				name: "TV Series",
				url: "/list/tv-series",
				icon: "Tv",
				show: true,
			},
			{
				name: "UI/UX",
				url: "/list/ui-ux",
				icon: "Brush",
				show: true,
			},
			{
				name: "Youtube",
				url: "/list/youtube",
				icon: "Youtube",
				show: true,
			},
		],
	},
	{
		name: "Markdown",
		icon: "Code2",
		show: true,
		children: [
			{
				name: "Markdown Editor",
				url: "/markdown/me",
				icon: "FileEdit",
				show: true,
			},
			{
				name: "MD Table Generator",
				url: "/markdown/md-table-generator",
				icon: "Dice5",
				show: true,
			},
			{
				name: "Table Of Content",
				url: "/markdown/toc",
				icon: "Table",
				show: true,
			},
		],
	},
	{
		name: "Text",
		icon: "Pencil",
		show: true,
		children: [
			{
				name: "Text Editor",
				url: "/text/te",
				icon: "ClipboardEdit",
				show: true,
			},
		],
	},
];

const ITEMS: MenuProps["items"] = [
	...MENU_ITEMS.filter((rootItem) => rootItem.show).map((item) => {
		return getItem(
			item.name,
			item.name as React.Key,
			item.icon as IconName,
			item.children
				.filter((item) => item.show)
				.map((child) =>
					getItem(
						child.name,
						child.url as React.Key,
						child.icon as IconName
					)
				)
		);
	}),
];

export { ITEMS };