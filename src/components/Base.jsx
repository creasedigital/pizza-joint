import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			x: "-100vw",
		},

		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", stiffness: "150", delay: 1 },
		},

		exit: {
			x: "-100vw",
			transition: {
				ease: "easeOut",
			},
		},
	};

	const buttonVariants = {
		// visible: {
		// 	x: [0, -20, 20, -20, 20, 0],
		// 	transition: { delay: 2 },
		// },
		hover: {
			// scale: [1, 1.1, 1, 1.1, 1, 1.1, 1, 1.1, 1],
			// yoyo is more suited for repeated animations
			scale: 1.1,
			textShadow: "0px 0px 8px rgb(255, 255, 255)",
			boxShadow: "0px 0px 8px rgb(255, 255, 255)",
			transition: {
				yoyo: 10,
				// yoyo: infinity
			},
		},
	};

	const nextVariants = {
		hidden: {
			x: "100vw",
		},
		visible: {
			x: 0,
			transition: { type: "spring", stiffness: "150", delay: 1 },
		},
	};

	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{
								originX: 0,
								scale: 1.4,
								color: "#f8e00a",
							}}
							transition={{ type: "spring", stiffness: "150" }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<div className="next" variants={nextVariants}>
					<Link to="/toppings">
						<motion.button variants={buttonVariants} whileHover="hover">
							Next
						</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	);
};

export default Base;
