import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faMediumM,
    faTwitter,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"; // import the icons you need


const Footer = () => {
    return (
        <footer className="footer-1 bg-black text-gray-200 py-8 sm:py-12">

            <div className="container mx-auto px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="sm:mx-auto sm:justify-center">
                <a target="_blank" href="https://codechefvit.com">
                    <img src="https://i.ibb.co/4J9LXxS/cclogo.png" alt="Footer CodeChef-VIT logo"
                         style={{height: 120, marginBottom: 40}}/></a></div>
                <span className="font-bold">CodeChef-VIT</span> is a non-commercial organization with a goal to provide a platform for programmers and
                developers everywhere to meet, compete & have fun. At CodeChef-VIT, we believe in the words of Matt
                Mullenweg - <i>“Technology is best when it brings people together”</i>.
                <br/><br/>
                <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="https://codechefvit.com" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Home</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://codechefvit.com/events" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Events</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="https://medium.com/codechef-vit" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Blogs</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://codechefvit.com/webinars" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Webinars</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="https://codechefvit.com/team" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Team</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://codechefvit.com/sponsors" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400">Sponsors</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="https://projects.codechefvit.com" target="_blank"
                                   className="border-b border-solid border-transparent ease-in-out transition-all hover:text-yellow-400"
                                   rel="noreferrer">Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 mt-4 sm:w-1/2  xl:w-1/4 sm:mx-auto xl:mt-0 xl:ml-auto sm:mt-5">
                        <div className="flex sm:justify-center xl:justify-start">
                            <a href="https://facebook.com/codechefvit" target="_blank"
                               className="w-8 h-8 border border-2  border-gray-300 bg-gray-50 rounded-full text-center py-1 text-black hover:text-white ease-in transition-all hover:bg-blue-600 hover:border-blue-600">
                                <i className="fab fa-facebook"><FontAwesomeIcon icon={faFacebookF}/></i>
                            </a>
                            <a href="https://twitter.com/codechefvit" target="_blank"
                               className="w-8 h-8 border border-2  border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in-out transition-all hover:text-white hover:bg-blue-400 hover:border-blue-400">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </a>
                            <a href="https://linkedin.com/company/codechef-vit-chapter" target="_blank"
                               className="w-8 h-8 border border-2  border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in-out transition-all hover:text-white hover:bg-blue-800 hover:border-blue-800">
                                <FontAwesomeIcon icon={faLinkedinIn}/>
                            </a>
                            <a href="https://instagram.com/codechefvit" target="_blank"
                               className="w-8 h-8 border border-2  border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in transition-all hover:text-white hover:bg-pink-600 hover:border-pink-600">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="https://youtube.com/codechefvit" target="_blank"
                               className="w-8 h-8 border border-2  border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in transition-all hover:text-white hover:bg-red-600 hover:border-red-600">
                                <FontAwesomeIcon icon={faYoutube}/>
                            </a>
                            <a href="https://github.com/CodeChefVIT" target="_blank"
                               className="w-8 h-8 border border-2 border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in transition-all hover:text-white hover:bg-gray-800 hover:border-black">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="https://medium.com/codechef-vit" target="_blank"
                               className="w-8 h-8 border border-2 border-gray-300 bg-gray-50 rounded-full text-center py-1 ml-2 text-black ease-in transition-all hover:text-white hover:bg-black hover:border-black">
                                <FontAwesomeIcon icon={faMediumM}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
                    <div className="sm:w-full px-2">
                        <strong>&copy; Copyright {new Date().getFullYear()} | All rights reserved.</strong>
                    </div>
                    <br/><br/>
                    <div className="text-center text-white sm:w-full px-2">
                        <strong>Made with <FontAwesomeIcon
                            className="heart mx-1.5 ease-in-out transition-all hover:text-red-600" icon={faHeart}/> by
                            CodeChef-VIT</strong>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;