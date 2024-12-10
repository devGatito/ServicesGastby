import React from "react";
import { Base } from "./styles";
import { Loader, Svg, Tooltip, Text } from "@components";

const dataIcon = {
//	arrowLine
};

const ButtonIcon = ({
	children,
	mobile,
	loading,
	icon,
	direction,
	w,
	widthTooltip,
	sizeIcon,
	tooltip,
	small,
	name,
	width,
	height, // Nueva propiedad para altura
	nohover,
	...props
}) => {
	return (
		<>
			{tooltip && (
				<Tooltip
					direction={direction}
					w={widthTooltip}
					element={
						<Base
							nohover={nohover}
							w={width}
							h={height} // Pasamos la altura al componente Base
							small={small}
							icon={icon}
							name={name}
							aria-label={name}
							{...props}
						>
							{loading && <Loader w={20} />}
							{icon && <Svg icon={dataIcon[icon]} wsvg={w} />}
						</Base>
					}
				>
					<Text size={12} weight="500" align="center">
						{tooltip}
					</Text>
				</Tooltip>
			)}

			{!tooltip && (
				<Base
					nohover={nohover}
					w={width}
					h={height} // Pasamos la altura aquí también
					icon={icon}
					{...props}
					name={name}
					aria-label={name}
				>
					{loading && <Loader w={w} />}
					{icon && <Svg icon={dataIcon[icon]} wsvg={w} />}
				</Base>
			)}
		</>
	);
};

export default ButtonIcon;
