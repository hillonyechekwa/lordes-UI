



const Spinner = ({message, size}) => {
   {size === 'mid'? (
            <div className="w-full h-screen overflow-hidden pt-10 flex justify-center items-center">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
                <h3 className="font-sans text-lg text-slate-800 text-medium capitalize">{message}</h3>
            </div>
        </div>
        )
        :
        (
            <div className="w-full h-screen overflow-hidden pt-10 flex justify-center items-center">
            <div className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
                <h3 className="font-sans text-lg text-slate-800 text-medium capitalize">{message}</h3>
            </div>
        </div>
        )}
}

export default Spinner