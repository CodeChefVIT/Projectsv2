import axios from "axios";
import React from "react";
// import Card from "./Card.js";

const baseURL = "https://projectsv2.herokuapp.com/project/get_data";
let i;

export default function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    console.log(post);
    return (
        <section className="projects bg-black">
            <h2 className="text-yellow-400 sm:text-center lg:text-left lg:mx-16 text-2xl">2021</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">


                <div className="my-10 mx-8">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-gray-900">
                        <img src="" alt="img" className="w-100" />
                        <div className="px-6 py-4">
                            <div className="text-white mb-2 text-2xl font-bold px-2">{post[0].repo_name}</div>
                            <p className="text-white mb-3 px-2">{post[0].repo_description}</p>
                        </div>
                        <div className="grid gap-5 mt-2 mb-6 justify-items-center">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full w-auto">
                                View Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-10 mx-8">
                    <div className="rounded overflow-hidden shadow-lg max-w-sm bg-gray-900">
                        <img src="" alt="img" className="w-100" />
                        <div className="px-6 py-4">
                            <div className="text-white mb-2 text-2xl font-bold px-2">{post[1].repo_name}</div>
                            <p className="text-white mb-3 px-2">{post[1].repo_description}</p>
                        </div>
                        <div className="grid gap-5 mt-2 mb-6 justify-items-center">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full w-auto">
                                View Project
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );

}