import React from "react";

const getType = {
	info: {
		color: "#007bff", 
		icon: "ℹ️",
	},
	warning: {
		color: "#ffc107", 
		icon: "⚠️",
	},
	error: {
		color: "#dc3545", 
		icon: "❌",
	},
	success: {
		color: "#28a745", 
		icon: "✔️",
	},
};

function Index({
	children,
	type = "info", 
	align = "left",
	noClose = false,
	className = "",
	onClose,
	...props
}) {
	const currentType = getType[type] || getType.info;
	
	return (
		<div
			className={`index-container ${className}`}
			style={{
				textAlign: align,
				color: currentType.color, 
				border: `1px solid ${currentType.color}`,
				padding: "16px",
				borderRadius: "8px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				gap: "8px",
				position: "relative", 
				
			}}
			{...props}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
				<span style={{ fontSize: "18px" }}>{currentType.icon}</span>
				<div>{children}</div>
			</div>

			{!noClose && (
				<button
					onClick={onClose}
					style={{
						position: "absolute",
						top: "8px",
						right: "8px",
						background: "none",
						border: "none",
						cursor: "pointer",
						color: currentType.color,
						fontSize: "18px",
					}}
				>
					&times;
				</button>
			)}
		</div>
	);
}

export default Index;
