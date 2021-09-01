const Modal = ({closeModal}) => {
    return (
        <div className="bg-black bg-black-800 absolute inset-0 justify-center items-center">
            <div className="bg-black-600 py-2 px-3 rounded shadow-xl text-gray-800 sm:w-full lg:w-6/12">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-white">Project Name</h2>
                    <svg className="h-6 w-6 cursor-pointer p-1 bg-white hover:bg-gray-300 rounded-full" 
                        fill="currentColor" viewBox="0 0 20 20" onClick={()=>closeModal(false)}>
                        <path fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="mt-2 text-sm text-white">
                    <h5 className="inline-block">Issues:</h5> &nbsp; <p className="inline-block">2</p>
                </div>
                <div className="mt-2 text-sm text-white">
                    <h5 className="inline-block">Contributors:</h5> &nbsp; <p className="inline-block">XYZ</p>
                    <p className="inline-block">ABC</p>
                </div>
                <div className="mt-2 text-sm text-white">
                    <h5 className="inline-block">URL:</h5> &nbsp; <p className="inline-block">https://github.com/CodeChefVIT</p>
                </div>
                <div className="mt-2 text-sm text-white">
                    <h5 className="inline-block">Pull Requests:</h5> &nbsp; <p className="inline-block">2</p>
                </div>
                <div className="mt-2 text-sm text-white">
                    <h5 className="inline-block">Languages:</h5> &nbsp; <p className="inline-block">Python</p> &nbsp; <p
                        className="inline-block">Javascript</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;