import {useFormik} from 'formik'




const BioLoc = ({action}) => {

	const formik = useFormik({
		initialValues: {
			bio: '',
			location: ''
		},
		onSubmit: values => {
			action({
				variables:{
					...values
				}
			})
		}
	})
	
	
	return(
		<main>
			<header>
				<h1>Tell us More About you</h1>
				<p>knowing about where you want to recieve services or deliver services from is important so you can be easily located</p>
			</header>
			<form onSubmit={handleSubmit}>

			<div class="sm:col-span-3">
          <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Email
          </label>
        </div>
        {/* <!-- End Col --> */}

        <div class="sm:col-span-9">
          <input id="af-account-email" type="email" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="maria@site.com" />
        </div>


			<button type="submit" className={`mt-8 py-3 px-20 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-violet-600 text-white hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`} >
                Next
              </button>
			</form>
		</main>
		)
}

export default BioLoc