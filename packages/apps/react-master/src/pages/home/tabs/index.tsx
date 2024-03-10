import React, { useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {
	onChange?: (bool: boolean) => void;
};

const tabs = [
	{ name: "关注", to: "/follow" },
	{ name: "推荐", to: "/" },
	{ name: "热榜", to: "/hot" },
	{ name: "视频", to: "/zvideo" },
];

const Tabs = ({ onChange }: Props) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const intersectionObserve: IntersectionObserver | undefined =
			new IntersectionObserver((entries) => {
				// console.log(entries[0].isIntersecting);
				onChange?.(entries[0].isIntersecting);
			});

		scrollRef.current && intersectionObserve.observe(scrollRef.current);

		return () => {
			scrollRef.current &&
				intersectionObserve.unobserve(scrollRef.current);
		};
	}, []);

	return (
		<div className=" w-full">
			<div ref={scrollRef}></div>
			<div className="flex mx-6 box-border">
				{tabs.map((item) => (
					<NavLink
						to={item.to}
						key={item.to}
						className={({ isActive }) =>
							" whitespace-nowrap py-4 px-4 text-base transition-all" +
							(isActive
								? " text-blue-600 font-bold"
								: " text-black hover:text-blue-900")
						}
					>
						{item.name}
					</NavLink>
				))}
			</div>
			<Outlet />
		</div>
	);
};

export default Tabs;
