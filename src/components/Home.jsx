import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div className="home container" animate={{}}>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, scale: 2 }}
				transition={{ delay: 1, duration: 4 }}
			>
				Welcome to Pizza Joint
			</motion.h2>
			<Link to="/base">
				<motion.button
					whileHover={{
						scale: 1.1,
						textShadow: "0px 0px 8px rgb(255, 255, 255)",
						boxShadow: "0px 0px 8px rgb(255, 255, 255)",
					}}
				>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;
