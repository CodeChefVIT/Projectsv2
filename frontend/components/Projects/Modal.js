const Modal = ({ closeModal }) => {
    return (
        <div className="justify-center items-center flex overflow-hidden fixed inset-0 z-50 backdrop-filter backdrop-blur-md">
            <div className="relative sm:w-8/12 xs:w-9/12 my-6 mx-auto xs:max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-2xl text-white font-semibold">
                            Repo Name
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
                        <h1 className="inline text-white text-lg">Contributors: </h1>
                        <p className="my-4 inline text-white leading-relaxed">
                            XYZ XYZ XYZ
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg">Repo URL: </h1>
                        <p className="my-4 inline text-white leading-relaxed">
                            https://www.google.com
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg">Issues:</h1>
                        <p className="my-4 inline text-white leading-relaxed">
                            56
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg">Languages: </h1>
                        <p className="my-4 inline text-white leading-relaxed">
                            Javascript
                        </p> &nbsp;
                        <p className="my-4 inline text-white leading-relaxed">
                            Python
                        </p> &nbsp;
                        <p className="my-4 inline text-white leading-relaxed">
                            CSS
                        </p>
                    </div>
                    <div className="relative px-6 py-4 flex-auto">
                        <h1 className="inline text-white text-lg">Pull Requests:</h1>
                        <p className="my-4 inline text-white leading-relaxed">
                            2
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;

