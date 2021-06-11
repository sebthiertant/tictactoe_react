import React from "react";

const Square = ({ value, onClick }: any) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
