import React, { useState } from "react";
import {
	Alert,
	Flex,
	Button,
	Text,
	ButtonIcon,
	Card,
	CheckBox,
	Col,
	Quantity,
	Image,
	ImageUrna,
	Input,
	Radio,
} from "@components";

const UseComponents = () => {
	const [selectedValue, setSelectedValue] = useState("");

	const handleRadioChange = ({ checked, value }) => {
		if (checked) {
			setSelectedValue(value);
		}
	};
	const handleSubmit = () => {
		alert(`Selected option: ${selectedValue}`);
	};
	return (
		<>
			<Flex>
				<Radio
					name="example-radio"
					id="option1"
					value="Option 1"
					selected={selectedValue === "Option 1"}
					getValue={handleRadioChange}
				>
					Option 1
				</Radio>{" "}
				<Radio
					name="example-radio"
					id="option2"
					value="Option 2"
					selected={selectedValue === "Option 2"}
					getValue={handleRadioChange}
				>
					Option 2
				</Radio>
				<Radio
					name="example-radio"
					id="option3"
					value="Option 3"
					selected={selectedValue === "Option 3"}
					getValue={handleRadioChange}
				>
					Option 3
				</Radio>
				<Flex>
					<Button
						theme="action"
						onClick={handleSubmit}
						disabled={!selectedValue}
					>
						Submit
					</Button>
				</Flex>
			</Flex>
		</>
	);
};

export default UseComponents;
