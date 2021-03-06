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
					<motion.div
						className="logo"
						drag
						dragConstraints={{ left: 50, top: 100, right: 20, bottom: 0 }}
						dragElastic={5}
					>
						Pizza J...
					</motion.div>
				</Link>
			</motion.header>
		</>
	);
};

export default Header;
