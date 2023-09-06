


const SearchBar = () => {
    return (
        <>
            <div class="hidden mx-auto sm:block">
                <label for="icon" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                        <svg class="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input type="text" id="icon" name="icon" class="py-2 px-4 pl-11 pr-20 block w-92 md:w-96 bg-transparent border-gray-700 shadow-sm rounded-md text-sm text-gray-300 focus:z-10 focus:border-gray-900 focus:ring-gray-600 placeholder:text-gray-500" placeholder="Search" />
                    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
                        <span class="text-gray-500">Ctrl + /</span>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SearchBar