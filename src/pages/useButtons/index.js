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
} from "@components";

const UseComponents = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [selectedValues, setSelectedValues] = useState([]);

	const [quantity, setQuantity] = useState(1);
	const [inputValue, setInputValue] = useState(""); // State to store input value
	const [showPasswd, setShowPasswd] = useState(false);

	const handleInputChange = (value) => {
		setInputValue(value);
	};
	// This function will be called whenever the quantity changes
	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
	};

	const [modalOpen, setModalOpen] = useState(false);

	const handleImageClick = () => {
		setModalOpen(true); // Open a modal or perform any action when the image is clicked
	};
	const handleModalClose = () => {
		setModalOpen(false); // Close the modal
	};

	// Maneja el cambio en los valores seleccionados
	const handleCheckChange = ({ checked, value }) => {
		setSelectedValues((prev) =>
			checked ? [...prev, value] : prev.filter((v) => v !== value),
		);
	};

	const handleClose = () => {
		setShowAlert(false);
	};

	return (
		<>
			<Text>UseComponents</Text>

			<Flex>
				<ButtonIcon
					tooltip="Este es un tooltip con loader"
					icon="arrowLine"
					direction="top"
					widthTooltip={10}
					loading={true}
					w={12}
					name="Botón 1"
					width={120}
				/>

				{/* Botón Pequeño sin Tooltip */}
				<ButtonIcon
					small={true}
					icon="arrowLine"
					name="Botón 2"
					width={120}
					w={12}
					nohover={false}
				/>

				{/* Botón sin Ícono pero con Tooltip */}
				<ButtonIcon
					tooltip="Soy solo un tooltip"
					widthTooltip={100}
					direction="right"
					width={120}
					name="Botón 3"
				/>

				{/* Botón Pequeño con Loader y sin Hover */}
				<ButtonIcon
					small={true}
					loading={true}
					nohover={true}
					width={120}
					w={16}
					name="Botón 4"
				/>

				{/* Botón con Ícono pero sin Tooltip ni Loader */}
				<ButtonIcon
					icon="arrowLine"
					width={120}
					w={24}
					name="Botón 5"
					nohover={false}
				/>
			</Flex>

			<Flex gap="12px">
				{/* Mensaje tipo info */}
				{showAlert && (
					<Alert type="info" onClose={handleClose} align="center">
						<span>Este es un mensaje informativo.</span>
					</Alert>
				)}

				{/* Mensaje tipo error */}
				<Alert type="error" noClose>
					Este es un mensaje de error, sin botón de cierre.
				</Alert>

				{/* Mensaje tipo éxito */}
				<Alert
					type="success"
					align="right"
					onClose={() => console.log("Éxito cerrado")}
				>
					¡Operación completada con éxito!
				</Alert>
			</Flex>

			{/*Botones*/}
			{/* Botón primario */}
			<Button onClick={() => alert("Clicked!")} variant="primary">
				Click Me
			</Button>

			{/* Botón deshabilitado */}
			<Button disabled variant="secondary">
				Disabled Button
			</Button>

			{/* Botón con ícono */}
			<Button
				icon={
					<span role="img" aria-label="icon">
						🚀
					</span>
				}
				variant="outline"
				onClick={() => console.log("With Icon")}
			>
				Launch
			</Button>

			{/* Botón cargando */}
			<Button loading size="large" fullWidth>
				Loading...
			</Button>

			<Flex gap="12px">
				<Card
					height="200px"
					width="300px"
					variant="elevated"
					padding="20px"
					margin="10px"
					borderRadius="10px"
				>
					<h3>Tarjeta Elevada</h3>
					<p>Contenido de la tarjeta.</p>
				</Card>

				{/* Tarjeta con borde y evento onClick */}
				<Card
					height="200px"
					width="300px"
					variant="outlined"
					onClick={() => alert("Tarjeta clickeada!")}
				>
					<h3>Tarjeta Clickeable</h3>
				</Card>

				{/* Tarjeta plana con clase personalizada */}
				<Card
					height="200px"
					width="300px"
					variant="flat"
					className="custom-card"
				>
					<p>Tarjeta con clase CSS.</p>
				</Card>
			</Flex>
			<Flex gap="12px">
				{/* Checkbox 1 */}
				<CheckBox
					id="check1"
					name="example1"
					value="value1"
					selected={false}
					getValue={handleCheckChange}
				>
					Opción 1
				</CheckBox>

				{/* Checkbox 2 (Seleccionado por defecto) */}
				<CheckBox
					id="check2"
					name="example2"
					value="value2"
					selected={true}
					getValue={handleCheckChange}
					disabled={false}
				>
					Opción 2 (Seleccionado por defecto)
				</CheckBox>

				{/* Checkbox 3 (Deshabilitado) */}
				<CheckBox
					id="check3"
					name="example3"
					value="value3"
					disabled={true}
				>
					Opción 3 (Deshabilitado)
				</CheckBox>

				<Text>Valores seleccionados:</Text>
				<ul>
					{selectedValues.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
			</Flex>

			<Col>
				<Text>Esto es la primera columna.</Text>
			</Col>
			<Col>
				<Text>Esto es diferente columna.</Text>
			</Col>
			<Flex>
				<Quantity
					value={quantity}
					step={1}
					max={10}
					getValue={handleQuantityChange}
					label={(count) => `Quantity: ${count}`}
					allowZero={false}
				/>
				<Image
					url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0WgVwW-_RD-ph8bDtglOb_Mb17Tq_GTKfw&s" // URL of the image
					name="Product Image"
					fit="cover"
					imagePosition="center"
					imageRadius="8px"
				/>

				<ImageUrna
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0WgVwW-_RD-ph8bDtglOb_Mb17Tq_GTKfw&s" // URL of the image
					alt="Product Image"
					fit="cover"
					radius="8px"
					position="center"
					onClick={handleImageClick}
				/>
				{/* Modal for the image */}
				{modalOpen && (
					<div className="modal">
						<div
							className="modal-content"
							onClick={(e) => e.stopPropagation()}
						>
							<h2>Image Modal</h2>
							<p onClick={handleModalClose}>
								Click outside to close.
							</p>

							<ImageUrna
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0WgVwW-_RD-ph8bDtglOb_Mb17Tq_GTKfw&s"
								alt="Product Image"
								fit="contain"
								radius="8px"
								position="center"
							/>
						</div>
					</div>
				)}
			</Flex>
			<hr></hr>
			<Flex gap="12px">
				<Input
					placeholder="Enter text"
					value={inputValue}
					getValue={handleInputChange} // The getValue function to update the state
					error="Invalid input" // Example error message
					warning="This is a warning" // Example warning message
				/>
				<Input
					placeholder="Enter your name"
					value={inputValue}
					getValue={handleInputChange}
					maxLength={100}
				/>

				<Input
					type="password"
					value={inputValue}
					getValue={handleInputChange}
					onChange={() => setShowPasswd(!showPasswd)}
				/>
				
			</Flex>
			<Flex gap="12px">
				<Input
					onlyAlpha={true}
					value={inputValue}
					getValue={handleInputChange}
				/>
				<Input
					isCurp={true}
					value={inputValue}
					getValue={handleInputChange}
					error="Invalid CURP"
				/>
				<Input
					value={inputValue}
					getValue={handleInputChange}
					warning="This input is optional"
				/>
			</Flex>
			<Flex gap="12px">
			<Input
					type="email"
					value={inputValue}
					getValue={handleInputChange}
					onChange={handleInputChange}
				/>

				<Input
					isNumber={true}
					onlyPositiveNumbers={true}
					value={inputValue}
					getValue={handleInputChange}
				/>
				<Input
					isSlug={true}
					value={inputValue}
					getValue={handleInputChange}
				/>
			</Flex>
		</>
	);
};

export default UseComponents;
