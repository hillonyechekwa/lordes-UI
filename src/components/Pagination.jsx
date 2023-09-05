


const Pagination = () => {
    return(
        <>
            <nav class="flex items-center space-x-2">
  <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none" href="#">
    <span aria-hidden="true">«</span>
    <span>Previous</span>
  </a>
  <a class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
  <a class="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
  <a class="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
  <a class="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
    <span>Next</span>
    <span aria-hidden="true">»</span>
  </a>
</nav>
        </>
    )
}

export default Pagination