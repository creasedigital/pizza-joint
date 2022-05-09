import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<motion.header
				initial={{ y: -250 }}
				animate={{ y: 0 }}
				transition={{ delay: 0.4, type: "spring", stiffness: "150" }}
			>
				<Link to="/">
					<div className="logo">Pizza J...</div>
				</Link>
			</motion.header>
		</>
	);
};

export default Header;
