import React, { useState } from 'react'
import Modal from './Modal';
import axios from "axios";
import Navbar2 from '../Secondnavbar/Navbar2'

const Project = () => {

    const [openModal, setOpenModal] = useState(false);
    const [project, setProject] = useState({});
    const [year, setYear] = useState('2021');
    const baseURL = "https://projectsv2.herokuapp.com/project/get_data";
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;


    return (
        <>
            <Navbar2 year={year} setYear={setYear} />
            <section className="projects bg-cbg">

                <h2 className="text-yellow-400 py-10 xs:text-center lg:text-left lg:mx-10 text-3xl font-bold">{year}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">



                    {
                        post[year].map((item, key) => {
                            return (
                                <div className="my-10 mx-8" key={key}>
                                    <div className="rounded overflow-hidden shadow-lg bg-black h-full">
                                        <img src={`data:image/png;base64, ${item.repo_thumbnail}`} />
                                        <div className="px-6 py-4">
                                            <div className="text-white mb-2 text-2xl font-bold px-2">{item.repo_name}</div>
                                            <p className="text-white mb-3 px-2">{item.repo_description}</p>
                                        </div>
                                        <div className="grid gap-5 mt-2 mb-6 justify-items-center">
                                            <button onClick={() => { setProject(item); setOpenModal(true) }} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full w-auto">
                                                View Project
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }
                    {openModal && <Modal closeModal={setOpenModal} project={project} />}
                </div>
            </section>
        </>

    );
}

export default Project;