import React from "react";
import { icons } from "lucide-react";

const DEFAULT_ICON_NAME = "AlertCircle";

type IconName = keyof typeof icons;

interface IconProps {
	name: IconName;
	size?: number;
	color?: string;
	className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 18, color, className }) => {
	let LucideIcon = icons[name];

	if (!LucideIcon) {
		console.error(
			`Icon with name "${name}" does not exist. Using default icon.`
		);
		LucideIcon = icons[DEFAULT_ICON_NAME];

		if (!LucideIcon) {
			console.error(
				`Default icon "${DEFAULT_ICON_NAME}" also does not exist.`
			);
			return null;
		}
	}

	return (
		<LucideIcon
			strokeWidth="1.3"
			size={size}
			color={color}
			className={className}
		/>
	);
};

export default Icon;
