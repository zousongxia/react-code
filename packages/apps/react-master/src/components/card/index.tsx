import React, { ReactNode } from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

const Card = ({ className, children }: Props) => {
	return (
		<div
			className={` bg-white boder border-gray-200 m-2 rounded-sm shadow-md ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
