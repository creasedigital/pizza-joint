import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div className="home container" animate={{ x: -50 }}>
			<motion.h2 animate={{ scale: 2.0 }}>Welcome to Pizza Joint</motion.h2>
			<Link to="/base">
				<motion.button animate={{ scale: 1.5 }}>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;
