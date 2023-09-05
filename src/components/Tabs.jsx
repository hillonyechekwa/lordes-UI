


const Tabs = () => {
    return(
        <>
            <nav class="flex space-x-2" aria-label="Tabs" role="tablist">
  <button type="button" class="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 active" id="pills-with-brand-color-item-1" data-hs-tab="#pills-with-brand-color-1" aria-controls="pills-with-brand-color-1" role="tab">
    Tab 1
  </button>
  <button type="button" class="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300" id="pills-with-brand-color-item-2" data-hs-tab="#pills-with-brand-color-2" aria-controls="pills-with-brand-color-2" role="tab">
    Tab 2
  </button>
  <button type="button" class="hs-tab-active:bg-blue-600 hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-lg hover:text-blue-600 dark:hover:text-gray-400 dark:hover:text-gray-300" id="pills-with-brand-color-item-3" data-hs-tab="#pills-with-brand-color-3" aria-controls="pills-with-brand-color-3" role="tab">
    Tab 3
  </button>
</nav>

<div class="mt-3">
  <div id="pills-with-brand-color-1" role="tabpanel" aria-labelledby="pills-with-brand-color-item-1">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
    </p>
  </div>
  <div id="pills-with-brand-color-2" class="hidden" role="tabpanel" aria-labelledby="pills-with-brand-color-item-2">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
    </p>
  </div>
  <div id="pills-with-brand-color-3" class="hidden" role="tabpanel" aria-labelledby="pills-with-brand-color-item-3">
    <p class="text-gray-500 dark:text-gray-400">
      This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
    </p>
  </div>
</div>
        </>
    )
}


export default Tabs