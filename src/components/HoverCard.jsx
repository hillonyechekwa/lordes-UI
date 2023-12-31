


const HoverCard = () => {
    return (
            <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" href="#">
                <img className="w-full h-auto rounded-t-xl" src="../docs/assets/img/500x300/img1.jpg" alt="Image Description" />
                <div className="p-4 md:p-5">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        Card title
                    </h3>
                    <p className="mt-1 text-gray-800 dark:text-gray-400">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </div>
            </a>
    )
}


export default HoverCard