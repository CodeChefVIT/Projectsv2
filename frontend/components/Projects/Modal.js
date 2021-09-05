import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faCodeBranch, faStar} from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";

const Modal = ({ closeModal, project }) => {
    const x = project.repo_contributors
    return (
        <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 backdrop-filter backdrop-blur-sm">
            <div className="relative sm:w-10/12 xs:w-full my-6 mx-auto xs:max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-cfg outline-none focus:outline-none">
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
                    <div className="relative px-6 py-4 pb-2">
                        <h2 className="inline text-white text-lg font-extrabold">Contributors: </h2>
                        {
                            <div className="px-0 mx-auto mt-6 text-white leading-relaxed grid grid-cols-3">
                                {x.map(item => {
                                    if ((item.github_username!="dependabot[bot]") && (item.github_username!="CodeChefVIT-bot")){
                                    return (
                                        <>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <a href={`${item.profile_url}`} target="_blank" className="mt-2 pb-4 flex-auto content-center text-center font-medium  hover:bg-cbg"><img src={`${item.avatar_url}`} className="w-8 rounded-full mx-auto mt-2" alt="contributor img" /><br /> {item.github_username}</a>
                                        </>
                                    )};
                                })}
                            </div>
                        }
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg font-extrabold">Repo URL: </h1>
                        <p className="my-4 inline text-white leading-relaxed" style={{ textDecoration: "underline" }}>
                            <a target="_blank" className="hover:text-yellow-400 ease-in-out" href={`${project.repo_html_url}`}>{project.repo_html_url}</a>
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto text-white">
                        <FontAwesomeIcon icon={faStar} className="hover:text-yellow-400 ease-in-out"/>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            &nbsp;{project.stargazers_count}
                        </span>
                        &nbsp;
                        &nbsp;
                        <FontAwesomeIcon icon={faCodeBranch} className="hover:text-yellow-400 ease-in-out"/>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            &nbsp;{project.repo_forks}
                        </span>
                        &nbsp;
                        &nbsp;
                        <FontAwesomeIcon icon={faDotCircle} className="hover:text-yellow-400 ease-all"/>
                        <span className="my-4 text-lg text-white leading-relaxed">
                            &nbsp;{project.repo_issues}
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

