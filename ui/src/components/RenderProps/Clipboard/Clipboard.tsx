import useCopyToClipboard from "lib/utils/hooks/useCopyToClipboard";

export interface ClipboardProps {
	text: string;
	clipboardComponent: React.ElementType;
	className?: string;
	label?: string;
}

const Clipboard: React.FC<ClipboardProps> = ({
	text,
	clipboardComponent: ClipboardComponent,
	className = "",
	label,
}) => {
	const { copied, copyToClipboard, ClipboardMessage } = useCopyToClipboard();

	return (
		<div className={className} onClick={(e) => e.stopPropagation()}>
			{ClipboardMessage}
			<ClipboardComponent
				copyToClipboard={copyToClipboard}
				copied={copied}
				text={text}
				label={label}
			/>
		</div>
	);
};

export default Clipboard;
