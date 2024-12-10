import React from "react";
import { Base, BaseLink } from "./styles";
import { Loader } from "@components";

const Button = ({
	children,
	type = "button", // Tipo por defecto
	forwardRef,
	mobile = false,
	loading = false,
	theme = "default",
	name,
	disabled = false, // Nueva prop para deshabilitar
	onClick, // Nueva prop para manejar clics
	size = "medium", // Tamaño del botón (small, medium, large)
	variant = "primary", // Variante del botón (primary, secondary, outline, etc.)
	icon, // Prop para agregar un ícono
	fullWidth = false, // Prop para que el botón ocupe todo el ancho
	rounded = false, // Prop para bordes redondeados
	...props
}) => {
	const Wrapper = type === "link" ? BaseLink : Base;

	return (
		<Wrapper
			{...props}
			ref={forwardRef}
			theme={theme}
			mobile={mobile}
			loading={loading}
			type={type}
			disabled={disabled || loading} // Deshabilitado si `disabled` o `loading` son true
			onClick={!disabled && !loading ? onClick : undefined} // Evitar clics si está deshabilitado o cargando
			aria-label={
				typeof children === "string" ? children : name || "botón"
			}
			aria-busy={loading}
			aria-disabled={disabled}
			data-size={size}
			data-variant={variant}
			data-fullwidth={fullWidth}
			data-rounded={rounded}
			style={{
				width: fullWidth ? "100%" : undefined,
				borderRadius: rounded ? "50px" : "4px", // Ejemplo de estilo dinámico
			}}
		>
			{/* Icono opcional */}
			{icon && !loading && <span className="button-icon">{icon}</span>}
			{/* Loader o contenido */}
			{loading && <Loader className="loader-button" w={22} whited />}
			<span className="button-content">{loading ? children : children}</span>
		</Wrapper>
	);
};

export default Button;
