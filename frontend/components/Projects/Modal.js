import { faUnderline } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ closeModal, project }) => {
    const x = project.repo_contributors
    return (
        <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 backdrop-filter backdrop-blur-sm">
            <div className="relative sm:w-10/12 xs:w-full my-6 mx-auto xs:max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl text-white font-black">
                            {project.repo_name}
                        </h3>
                        <svg className="mt-1 h-6 w-6 cursor-pointer p-1 bg-white hover:bg-gray-500 rounded-full"
                            fill="currentColor" viewBox="0 0 20 20" onClick={() => closeModal(false)}>
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </div>
                    {/*body*/}
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Contributors: </h1>
                        {
                            <p className="my-4 text-white leading-relaxed">
                                {x.map(item => {
                                    return (
                                        item.github_username + "\n"
                                    );
                                })}
                            </p>
                        }
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Repo URL: </h1>
                        <p className="my-4 inline text-white leading-relaxed" style={{ textDecoration: "underline" }}>
                            <a target="_blank" href={`${project.repo_html_url}`}>{project.repo_html_url}</a>
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Issues: </h1>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            {project.repo_issues}
                        </span>
                        &nbsp;
                        &nbsp;
                        <h1 className="inline text-white text-lg font-extrabold">Pull Requests: </h1>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            {project.repo_pull_requests}
                        </span>
                        &nbsp;
                        &nbsp;
                        <h1 className="inline text-white text-lg font-extrabold">Languages: </h1>
                        <span className="my-4 text-base text-white leading-relaxed">

                            {
                                project.repo_languages + " "

                            }
                        </span>
                    </div>
                    {/* <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Languages: </h1>
                        <span className="my-4 text-base text-white leading-relaxed">

                            {
                                project.repo_languages + " "

                            }
                        </span>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Pull Requests: </h1>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            {project.repo_pull_requests}
                        </span>
                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default Modal;

