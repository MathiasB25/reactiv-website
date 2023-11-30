import { useState } from "react";
// Nextjs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// Components
import Layout from "@/Components/Layout";
// Notifications
import toast, { Toaster } from 'react-hot-toast';
// Animations
import { AnimatePresence, motion } from "framer-motion";
// Mock data
import { packages, status } from "@/mockData/packages";
import Modal from "@/Components/Modal";
import Spinner from "@/Components/Spinner";

export default function Home() {

    const router = useRouter(null);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [ loading, setLoading ] = useState(false);
    const [ packageId, setPackageId ] = useState("");
    const [ showModal, setShowModal ] = useState(false);

    const handleSubmitContact = (e) => {
        e.preventDefault();

        toast.success("Información de contacto enviada!", {
            position: 'top-right',
            duration: 4000,
            style: { fontWeight: 500 }
        });

        setName("");
        setSurname("");
        setCompany("");
        setEmail("");
        setPhoneNumber("");
    }

    const handleSubmitTracking = (e) => {
        e.preventDefault();

        if(packageId == 0) {
            toast.error("Debes escribir el ID del paquete", {
                position: 'top-right',
                duration: 4000,
                style: { fontWeight: 500 }
            })
            return;
        }

        setLoading(true);
        setTimeout(() => {
            if(!packages[packageId]) {
                toast.error("No pudimos encontrar este paquete", {
                    position: 'top-right',
                    duration: 4000,
                    style: { fontWeight: 500 }
                })
                setLoading(false);
                setPackageId("");
                return;
            }
            setLoading(false);
            setShowModal(true);
        }, 800);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setPackageId("");
    }

    const handleShowTracking = () => {
        router.push('/#tracking')
    }

    return (
        <Layout title={"Inicio"}>
            <AnimatePresence>
                {showModal && (
                    <Modal handleClose={handleCloseModal}>
                        <div className={"flex flex-col gap-6 text-center"}>
                            <div className={"text-xl font-black uppercase"}>Estado de tu paquete:</div>
                            <div className={"flex items-center gap-1"}>
                                <span>Tu paquete se encuentra</span>
                                <span className={"font-extrabold uppercase"}>{status[packages[packageId]]}</span>
                            </div>
                            <button onClick={handleCloseModal} className={"bg-white text-black py-2 px-8 rounded-md uppercase font-bold"}>Cerrar</button>
                        </div>
                    </Modal>
                )}
            </AnimatePresence>
            <Toaster />
            <section className={"flex flex-col justify-between h-screen py-8 lg:py-16 px-6 sm:px-10 lg:px-20"}>
                <Top />
                <div className={"flex flex-col items-center gap-8"}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .5 }}
                    >
                        <Image src={"/logo.png"} width={185} height={185} alt={"Logo"} />
                    </motion.div>
                    <motion.div 
                        className={"sm:border py-5 text-center w-full md:w-[90%]"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h1 className={"uppercase text-white font-black text-5xl sm:text-6xl md:text-7xl tracking-wider text-center"}>Reactiv</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <button onClick={handleShowTracking} className={"text-sm sm:text-base border-2 border-white py-3 px-3 sm:px-8 text-center text-neutral-200 tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm font-bold uppercase"}>Seguimiento de mi paquete</button>
                    </motion.div>
                </div>
                <Bottom />
            </section>
            <section className={"flex flex-col justify-between py-8 lg:py-16 px-6 sm:px-10 lg:px-20"}>
                <div className={"flex flex-col items-center justify-center gap-16 pb-32 pt-16 lg:pt-0"}>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .5 }}
                        className={"uppercase text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-center"}
                    >Acerca de nosotros</motion.h2>
                    <motion.p 
                        className={"xl:w-1/2 text-center text-neutral-300 sm:text-lg md:text-xl font-medium"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >Trazamos soluciones de calidad para aplicaciones de escritorio, adaptadas a las necesidades individuales de cada cliente. Nos destacamos por estructuras sólidas y estéticas modernas, asegurando actualización y funcionalidad constante. Con enfoque profesional y seguimiento de tendencias, impulsamos a las empresas en el entorno digital competitivo, proporcionando experiencias satisfactorias a los usuarios para contribuir al éxito empresarial.</motion.p>
                </div>
                <Top />
            </section>
            <section className={"flex flex-col justify-between py-8 lg:py-16 px-6 sm:px-10 lg:px-20"} id={"tracking"}>
                <div className={"flex flex-col items-center gap-16 pb-32 pt-16 lg:pt-0"}>
                    <motion.h2 
                        className={"uppercase text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-center"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .5 }}
                    >Seguimiento de paquete</motion.h2>
                    <form onSubmit={handleSubmitTracking} className={"w-full md:w-[35rem]"}>
                        <motion.div 
                            className={"flex flex-col items-center gap-8"}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <input
                                value={packageId}
                                onChange={e => setPackageId(e.target.value)}
                                className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"}
                                type="text"
                                placeholder={"ID de paquete"}
                                required
                            />
                            {loading && (
                                <Spinner />
                            )}
                            <button type={"submit"} className={"w-full border py-3 px-3 sm:px-8 text-center text-black tracking-wider border-transparent bg-white hover:bg-transparent hover:border-white hover:text-white transition-colors rounded-sm font-bold uppercase"}>Consultar estado</button>
                        </motion.div>
                    </form>
                </div>
                <Bottom />
            </section>
            <section className={"flex flex-col justify-between py-8 lg:py-16 px-6 sm:px-10 lg:px-20"} id={"contact"}>
                <div className={"flex flex-col items-center gap-16 pb-32 pt-16 lg:pt-0"}>
                    <motion.h2 
                        className={"uppercase text-white font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider text-center"}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: .5 }}
                    >Contacto</motion.h2>
                    <form onSubmit={handleSubmitContact} className={"w-full md:w-[35rem]"}>
                        <motion.div 
                            className={"flex flex-col gap-8"}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}    
                        >
                            <div className={"flex flex-col gap-3"}>
                                <div className={"grid grid-cols-2 gap-3"}>
                                    <input 
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"} 
                                        type="text" 
                                        placeholder={"Nombre"} 
                                        required 
                                    />
                                    <input 
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                        className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"} 
                                        type="text" 
                                        placeholder={"Apellido"} 
                                        required 
                                    />
                                </div>
                                <input 
                                    value={company}
                                    onChange={e => setCompany(e.target.value)}
                                    className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"} 
                                    type="text" 
                                    placeholder={"Empresa (opcional)"} 
                                />
                                <input 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"} 
                                    type="email" 
                                    placeholder={"Correo electrónico"} 
                                    required 
                                />
                                <input 
                                    value={phoneNumber}
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    className={"p-3 border border-white bg-transparent outline-none w-full focus:border-neutral-500 transition-colors font-medium"} 
                                    type="tel" 
                                    placeholder={"Número de teléfono"} 
                                    required 
                                />
                            </div>
                            <button type={"submit"} className={"border py-3 px-3 sm:px-8 text-center text-black tracking-wider border-transparent bg-white hover:bg-transparent hover:border-white hover:text-white transition-colors rounded-sm font-bold uppercase"}>Enviar</button>
                        </motion.div>
                    </form>
                </div>
                <Top />
            </section>
        </Layout>
    )
}

function Top({ visibility }) {
    return (
        <div className={`flex items-center justify-center sm:justify-between `}>
            <motion.div 
                className={"flex items-center justify-center sm:justify-start gap-1 w-[188px]"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: .5 }}
            >
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
            </motion.div>
            <motion.div 
                className={"hidden md:block h-[2px] bg-neutral-600 w-[10rem] lg:w-[20rem] xl:w-[40rem]"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            ></motion.div>
            <motion.div 
                className={"hidden sm:flex items-center gap-2"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className={"flex items-center w-[30px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
                <div className={"flex items-center w-[150px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function Bottom() {
    return (
        <div className={"flex items-center justify-center sm:justify-between"}>
            <motion.div 
                className={"flex items-center gap-2"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className={"flex items-center w-[150px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
                <div className={"flex items-center w-[30px]"}>
                    <div>
                        <div className={"shape-left-top"}></div>
                        <div className={"shape-left-bottom"}></div>
                    </div>
                    <div className={"w-full"}>
                        <div className={"shape-top"}></div>
                        <div className={"shape-bottom"}></div>
                    </div>
                    <div>
                        <div className={"shape-right-top"}></div>
                        <div className={"shape-right-bottom"}></div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className={"hidden md:block h-[2px] bg-neutral-600 w-[10rem] lg:w-[20rem] xl:w-[40rem]"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            ></motion.div>
            <motion.div 
                className={"hidden sm:flex items-center justify-end gap-1 w-[188px]"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: .5 }}
            >
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
                <i className="fa-light fa-plus text-lg"></i>
            </motion.div>
        </div>
    )
}