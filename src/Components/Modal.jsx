import { motion } from "framer-motion"

export default function Modal({ children, handleClose }) {
    return (
        <motion.div 
            className={"fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.9)] grid place-content-center z-10"}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={"relative px-6 pb-6 pt-9 bg-background rounded-md mx-3"}>
                <button onClick={handleClose} className={"absolute top-2 right-3"}>
                    <i className="fa-sharp fa-regular fa-xmark text-xl"></i>
                </button>
                {children}
            </div>
        </motion.div>
    )
}