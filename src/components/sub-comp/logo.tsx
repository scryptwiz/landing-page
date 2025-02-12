"use client"
import {motion} from "framer-motion";

type PropsType = {
    className?: string;
}

const Logo = ({className}: PropsType) => {
    return (
        <>
            <motion.div
                className={`bg-s1/10 text-s1 px-4 py-2 font-bold text-lg cursor-pointer ${className}`}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.4}}
            >
                LOGO
            </motion.div>
        </>
    );
};

export default Logo;