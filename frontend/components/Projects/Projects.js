import React, { useState } from 'react'
import Modal from './Modal';
import axios from "axios";
// import React, { useState } from 'react'

const Project = () => {

    const [openModal, setOpenModal] = useState(false);
    const baseURL = "https://projectsv2.herokuapp.com/project/get_data";
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    console.log(post);
    return (

        <section className="projects bg-cbg">

            <h2 className="text-yellow-400 xs:text-center lg:text-left lg:mx-16 text-2xl font-bold">2021</h2>


            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                <div className="my-10 mx-8">
                    <div className="rounded overflow-hidden shadow-lg bg-cbg h-full">
                        {/* <img src={`data:image/png;base64, ${post[key].repo_thumbnail}`} /> */}
                        <div className="px-6 py-4">
                            <div className="text-white mb-2 text-2xl font-bold px-2">FFDS</div>
                            <p className="text-white mb-3 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, provident.</p>
                        </div>
                        <div className="grid gap-5 mt-2 mb-6 justify-items-center">
                            <button onClick={() => { setOpenModal(true) }} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full w-auto">
                                View Project
                            </button>
                            {openModal && <Modal closeModal={setOpenModal} />}
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default Project;