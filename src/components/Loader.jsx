import { motion } from "framer-motion";

const loaderVariants = {
	animationOne: {
		x: [-20, 20],
		y: [0, -30],
		transition: {
			x: {
				yoyo: infinity,
				duration: 0.5,
			},
			y: {
				yoyo: infinity,
				duration: 0.25,
			},
		},
	},
};

const Loader = () => {
	return (
		<>
			<motion.div
				className="loader"
				variants={loaderVariants}
				animate="animateOne"
			></motion.div>
		</>
	);
};
export default Loader;
