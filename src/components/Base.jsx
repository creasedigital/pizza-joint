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
	};

	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
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
				<div className="next">
					<Link to="/toppings">
						<motion.button
							whileHover={{
								scale: 1.1,
								textShadow: "0px 0px 8px rgb(255, 255, 255)",
								boxShadow: "0px 0px 8px rgb(255, 255, 255)",
							}}
						>
							Next
						</motion.button>
					</Link>
				</div>
			)}
		</motion.div>
	);
};

export default Base;
