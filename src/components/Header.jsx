import { motion } from "framer-motion";

const Header = () => {
	return (
		<motion.header initial={{ y: -250 }} animate={{ y: 0 }}>
			<div className="logo">Pizza J...</div>
		</motion.header>
	);
};

export default Header;
