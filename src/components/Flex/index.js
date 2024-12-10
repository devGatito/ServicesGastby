import React from "react";
import styled, { css } from "styled-components";
import { SuperCSS } from "@utils";

// Wrapper para el contenedor Flex
const Wrapper = styled.div`
	display: ${({ type }) => (type === "inline" ? "inline-flex" : "flex")};
	width: ${({ type }) => (type === "inline" ? "auto" : "100%")};

	${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
	${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
	${({ gap }) => gap && `gap: ${gap};`}
	${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`}

	${(props) => SuperCSS.hydrate(props)}
`;

// Wrapper para los elementos hijos
const Child = styled.div`
	margin: ${({ gap }) => gap || "0px"};
	${({ grow }) => grow && `flex-grow: ${grow};`}
`;

// Componente Flex
const Flex = ({ children, ...props }) => {
	return (
		<Wrapper {...props}>
			{React.Children.map(children, (child) => (
				<Child gap={props.gap} grow={props.grow}>
					{child}
				</Child>
			))}
		</Wrapper>
	);
};

export default Flex;
