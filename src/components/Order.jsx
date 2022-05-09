import { motion } from "framer-motion";

const Order = ({ pizza }) => {
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
	const childVariants = {
		hidden: {
			opacity: 0,
		},

		visible: {
			opacity: 1,
		},
	};

	return (
		<motion.div
			className="container order"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h2>Thank you for your order 😊</h2>
			<p>You ordered a {pizza.base} pizza with:</p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;
