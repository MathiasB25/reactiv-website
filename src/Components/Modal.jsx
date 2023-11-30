import { motion } from "framer-motion"

export default function Modal({ children, handleClose }) {
    return (
        <motion.div 
            className={"fixed inset-0 flex items-center justify-center"}
            style={{ position: "fixed", background: "rgba(0,0,0,.9)", width: '100vw', height: '100vh', zIndex: 10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div 
                className={"relative px-6 pb-6 pt-9 rounded-md mx-3"} 
                style={{ position: "relative", background: "#141418", borderRadius: "0.375rem", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingBottom: "1.5rem", paddingTop: "2.25rem" }}
            >
                <button onClick={handleClose} className={"absolute top-2 right-3"} style={{ position: "absolute", top: "0.5rem", right: "0.75rem" }}>
                    <i className="fa-sharp fa-regular fa-xmark text-xl"></i>
                </button>
                {children}
            </div>
        </motion.div>
    )
}