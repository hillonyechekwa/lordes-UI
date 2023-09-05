import { useFormik } from "formik"
import { useState } from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import * as Yup from 'yup'


//TODO: do css and javascript client side validataion.
//this has to be a joke and probably something is definitely wrong.
const UserForm = ({ formType, action }) => {

  const [values, setValues] = useState()

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '', //there's no need to create an implementation in the backend.
      role: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .required('Required'),
      email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
      password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol'
      )
      .required('Required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
      role: Yup.string()
      .required('Please select a role')
    }),
    onSubmit: values => {
      console.log('values', values)
      action({
        variables: {
          ...values
        }
      })
    },
    onChange: event => {
      setValues({
        ...values,
        [event.target.name]: [event.target.value]
      })
    }
  })





  return (
    <main className="w-full h-full p-4 grid grid-cols-2 grid-rows-1 justify-evenly items-center">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Lorde&apos;s - {formType === 'signup' ? 'Sign Up' : 'Sign In'}</title>
      </Helmet>
      <section className="w-full relative p-4">
        {
          formType === "signup" ?
            <img className="w-full rounded-lg" src="/images/third-section-3.jpg" alt="signup page image" />
            :
            <img className="w-full rounded-lg" src="/images/third-section-1.webp" alt="signin page image" />
        }
      </section>
      <main className="w-full mx-auto">


        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col h-auto justify-between font-sans items-center relative">
          <header className="w-full h-40 rounded-lg p-6 flex justify-around items-center flex-col text-center bg-black text-white mb-6">
            {formType === 'signup' ?
              <>
                <h1 className="text-3xl font-semibold break-words capitalize">Join the Millions of people to access the best of hair services and products</h1>
                <p>Sign up and start enjoying the services provided my millions of stylist</p>
              </> :
              <>
                <h1 className="text-3xl font-semibold break-words capitalize">Welcome back</h1>
                <p>Let&apos;s make that hair look great</p>
              </>}
          </header>
          {/* username and email */}
          {
            formType === "signup" ?
              <>
                {/* ---------email----------- */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" {...formik.getFieldProps('email')} className="py-3 px-2 block w-full border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">{formik.errors.email}</p>
                  ) : null}
                </div>
                {/* ------------username------------ */}
                <div>
                  <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input type="username" id="username" name="username" {...formik.getFieldProps('username')} className="py-3 px-2 block w-full border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">{formik.errors.username}</p>
                  ) : null}
                </div>
              </>
              :
              <>
              {/* -------------email------------- */}
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email address</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" {...formik.getFieldProps('email')} className="py-3 px-2 block w-full border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                {/* -----------username------------ */}
                <div>
                  <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input type="username" id="username" name="username" {...formik.getFieldProps('username')} className="py-3 px-2 block w-full border-gray-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">{formik.errors.username}</p>
                  ) : null}
                </div>
              </>
          }
          {
            formType === 'signup' ?
              <>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" value={formik.values.password} onChange={handleChange} className="block text-sm mb-2 dark:text-white">Password</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" {...formik.getFieldProps('password')} className="py-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password? (
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">{formik.errors.password}</p>
                  ):null}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="confirmPassword" value={formik.values.confirmPassword} onChange={handleChange} className="block text-sm mb-2 dark:text-white">Password</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="confirmPassword" name="confirmPassword" {...formik.getFieldProps('confirmPassword')} className="py-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword? (
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">{formik.errors.confirmPassword}</p>
                  ):null}
                </div>
              </>
              :
              <>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" value={formik.values.password} onChange={handleChange} className="block text-sm mb-2 dark:text-white">Password</label>
                    <Link className="text-sm text-blue-600 decoration-2 hover:underline font-medium" to="/forgotpassword">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" {...formik.getFieldProps('password')} className="py-3 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  {formik.touched.password && formik.errors.password? (
                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">{formik.errors.password}</p>
                  ):null}
                </div>
              </>
          }
            // roles
          {
            formType === "signup" && (
              <>
                <label htmlForor="select-1" class="block text-sm font-medium mb-2 dark:text-white">I am signing up to:</label>
                <select id="role" name="role" {...formik.getFieldProps('role')} class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required>
                  <option selected value="">I am signing up to </option>
                  <option value="user">get hair services</option>
                  <option value="stylist">render hair services as a styist</option>
                  <option value="merchant">sell hair products as a merchant</option>
                </select>
                {formik.touched.role && formik.errors.role? (
                  <p class="text-sm text-red-600 mt-2">Please select a valid state. {formik.errors.role}</p>
                ): null}
              </>
            )
          }
          {
            formType === "signup"?
            <>
                <div className="p-2 sm:p-7">

                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Already have an account?
                      <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/signup">
                        Sign in here
                      </Link>
                    </p>
                  </div>

                  <div className="mt-5">
                    <button type="button" className="py-3 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                      <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                      </svg>
                      Sign up with Google
                    </button>



                  </div>
                </div>
            </>
            :
            <>
                <div className="p-2 sm:p-7">

                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Don't have an account yet?
                      <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/signup">
                        Sign up here
                      </Link>
                    </p>
                  </div>

                  <div className="mt-5">
                    <button type="button" className="py-3 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                      <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                      </svg>
                      Sign in with Google
                    </button>



                  </div>
                </div>
            </>
          }
        </form>
      </main>
    </main>
  )

}

export default UserForm