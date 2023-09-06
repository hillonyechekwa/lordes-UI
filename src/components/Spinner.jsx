



const Spinner = () => {
    return (
        <div className="w-full pt-10 flex justify-center items-center">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner