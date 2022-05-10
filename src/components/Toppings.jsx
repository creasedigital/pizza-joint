import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
			x: "-100vw",
		},

		visible: {
			opacity: 1,
			x: 0,
			transition: { type: "spring", delay: 0.5 },
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

	let toppings = [
		"mushrooms",
		"peppers",
		"onions",
		"olives",
		"extra cheese",
		"tomatoes",
	];

	return (
		<motion.div
			className="toppings container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							key={topping}
							onClick={() => addTopping(topping)}
							whileHover={{
								originX: 0,
								scale: 1.4,
								color: "#f8e00a",
							}}
							transition={{ type: "spring", stiffness: "150" }}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to="/order">
				<motion.button whileHover="hover">Order</motion.button>
			</Link>
		</motion.div>
	);
};

export default Toppings;
