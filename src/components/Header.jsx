import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<motion.header initial={{ y: -250 }} animate={{ y: 0 }}>
				<Link to="/">
					<div className="logo">Pizza J...</div>
				</Link>
			</motion.header>
		</>
	);
};

export default Header;
