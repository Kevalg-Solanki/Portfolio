import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const [hovering, setHovering] =
		useState(false);

	// Mouse Position
	useEffect(() => {
		const moveCursor = (
			e: MouseEvent
		) => {
			setPosition({
				x: e.clientX,
				y: e.clientY,
			});
		};

		window.addEventListener(
			"mousemove",
			moveCursor
		);

		return () =>
			window.removeEventListener(
				"mousemove",
				moveCursor
			);
	}, []);

	// Hover Detection
	useEffect(() => {
		const addHover = () =>
			setHovering(true);

		const removeHover = () =>
			setHovering(false);

		const elements =
			document.querySelectorAll(
				"a, button"
			);

		elements.forEach((el) => {
			el.addEventListener(
				"mouseenter",
				addHover
			);

			el.addEventListener(
				"mouseleave",
				removeHover
			);
		});

		return () => {
			elements.forEach((el) => {
				el.removeEventListener(
					"mouseenter",
					addHover
				);

				el.removeEventListener(
					"mouseleave",
					removeHover
				);
			});
		};
	}, []);

	return (
		<motion.div
			className="
				fixed
				top-0
				left-0
				w-8
				h-8
				border-2
				border-blue-500
				rounded-full
				pointer-events-none
				z-[9999]
				hidden lg:block
			"
			animate={{
				x: position.x - 16,
				y: position.y - 16,
				scale: hovering ? 2 : 1,
			}}
			transition={{
				type: "spring",
				stiffness: 500,
				damping: 28,
			}}
		/>
	);
}