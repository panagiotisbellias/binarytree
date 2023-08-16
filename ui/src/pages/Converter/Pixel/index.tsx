import { useState } from "react";
import style from "./Pixel.module.scss";
import { InputNumber, Form } from "antd";

const Pixel: React.FC = () => {
	const [pixel, setPixel] = useState(0.0);
	const [rem, setRem] = useState(0.0);
	const [base, setBase] = useState(16);
	return (
		<div className={style.pc}>
			<Form layout="vertical">
				<Form.Item label="Pixels" tooltip="This is a required field">
					<InputNumber
						style={{ width: "100%" }}
						precision={2}
						min={0}
						step={1}
						placeholder="Enter pixel value"
						value={pixel}
						onChange={(px: number | null) => {
							if (px) {
								setPixel(px);
								setRem(px / base);
							}
						}}
					/>
				</Form.Item>
				<Form.Item label="REM" tooltip="This is a required field">
					<InputNumber
						style={{ width: "100%" }}
						precision={2}
						min={0}
						step={0.01}
						placeholder="Enter REM value"
						value={rem}
						onChange={(rem: number | null) => {
							if (rem) {
								setRem(rem);
								setPixel(rem * base);
							}
						}}
					/>
				</Form.Item>
				<Form.Item
					label="Base Font Size"
					tooltip="This is a required field"
				>
					<InputNumber
						style={{ width: "100%" }}
						className={style.pc__base}
						precision={2}
						min={0}
						step={1}
						placeholder="Enter Unit"
						value={base}
						onChange={(base: number | null) => {
							if (base) {
								setBase(base);
								setRem(pixel / base);
							}
						}}
					/>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Pixel;