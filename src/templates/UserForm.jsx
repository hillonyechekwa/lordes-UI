import { useFormik } from "formik"
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import * as Yup from 'yup'


//TODO: do css and javascript client side validataion.
//this has to be a joke and probably something is definitely wrong.
const UserForm = ({ formType, action, loading }) => {

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '', //there's no need to create an implementation in the backend.
      role: ''
    },
    validationSchema: () => {
      if (formType === "signup") {
        return Yup.object({
          username: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(20, 'Can\'t be more than 20 characters')
            .matach(/^[a-zA-Z0-9_]+$/,
              'usernames can only include letters, numbers and underscores')
            .required('This field can\'t be empty'),
          email: Yup.string()
            .email('Invalid email address')
            .required('This field can\'t be empty'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
              'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol'
            )
            .required('This field can\'t be empty'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('This field can\'t be empty'),
          role: Yup.string()
            .oneOf(
              ['user', 'stylist', 'merchant'],
              'Invalid role'
            )
            .required('You have to select a role'),
        })
      } else if (formType === "signin") {
        return Yup.object({
          username: Yup.string()
            .min(3, 'Must be at least 3 characters'),
          email: Yup.string()
            .email('Invalid email address'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/,
              'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol')
            .required('This field can\'t be empty')
        })
      }
    },
    onSubmit: values => {
      // console.log('userform values', values)
      const { username, email, password, } = values
      
        formType === "signup" ?
        action({
          variables: {
            username,
            email,
            password,
            role
          }
        })
        :
        action({
          variables: {
            username,
            email,
            password
          }
        })
      
    },
  })


  // console.log('validationschema', formik.validationSchema)




  return (
    <main className="w-full h-auto p-4 flex flex-row justify-evenly items-center">
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Lorde&apos;s - {formType === 'signup' ? 'Sign Up' : 'Sign In'}</title>
      </Helmet>
      <section className="w-full relative p-12">
        <Link className="mb-12 w-full sm:w-auto inline-flex  justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-slate-500 hover:text-violet-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900" to="/">
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Go back
        </Link>
        {
          formType === "signup" ?
            <img className="w-full rounded-lg" src="/images/third-section-3.jpg" alt="signup page image" />
            :
            <img className="w-full rounded-lg" src="/images/third-section-1.webp" alt="signin page image" />
        }
      </section>
      <main className="w-full mx-auto">


        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col h-auto justify-between font-sans items-center relative">
          <header className="w-full h-40 rounded-lg p-6 flex justify-around items-center flex-col font-sans font-semibold text-center bg-white mb-6 dark:bg-slate-700 dark: text-white">
            {formType === 'signup' ?
              <>
                <h1 className="text-slate-700 text-6xl font-semibold break-words capitalize">Sign Up</h1>
                <p className=" text-slate-400 font-medium">Join lorde's to gain access the hair services provided my millions of stylists</p>
              </>
              :
              <>
                <h1 className="text-slate-700 text-6xl font-semibold break-words capitalize">Welcome back</h1>
                <p className="font-medium text-slate-400">Let&apos;s make that hair look great</p>
              </>}

          </header>
          <small className="text-slate-500 text-xs">* = required</small>
          {/* username and email */}
          {
            formType === "signup" && (
              <>
                {/* ---------email----------- */}
                <div className="font-sans">
                  <label htmlFor="email" className="block mt-5 text-sm mb-2 font-semibold text-slate-500 dark:text-white">Email address*</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" {...formik.getFieldProps('email')} placeholder="Your email here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="text-xs text-red-600 mt-2" id="email-error">{formik.errors.email}</p>
                  ) : null}
                </div>
                {/* ------------username------------ */}
                <div className="font-sans">
                  <label htmlFor="username" className="block mt-5 text-sm mb-2 text-slate-500 font-semibold dark:text-white">Username*</label>
                  <div className="relative">
                    <input type="username" id="username" name="username" {...formik.getFieldProps('username')} placeholder="Your username here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="username-error" />
                    {formik.touched.username && formik.errors.username ? (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  {formik.touched.username && formik.errors.username ? (
                    <p className="text-xs text-red-600 mt-2" id="username-error">{formik.errors.username}</p>
                  ) : null}
                </div>
              </>
            )}
          {
            formType === 'signin' && (
              <>
                {/* -------------email------------- */}
                <div>
                  <label htmlFor="email" className="block mt-5 text-sm font-semibold text-slate-500 mb-2 dark:text-white">Email address</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" {...formik.getFieldProps('email')} placeholder="Your email here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" aria-describedby="email-error" />
                    {formik.touched.email && formik.errors.email ? (

                      <div className="invisible absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}

                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className=" hidden text-xs text-red-600 mt-2" id="email-error"> {formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="py-3 flex items-center font-medium text-xs text-gray-600 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                {/* -----------username------------ */}
                <div>
                  <label htmlFor="username" className="block mt-5 text-sm font-semibold text-slate-500 mb-2 dark:text-white">Username</label>
                  <div className="relative">
                    <input type="username" id="username" name="username" {...formik.getFieldProps('username')} placeholder="Your username here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" aria-describedby="username-error" />

                    {formik.touched.username && formik.errors.username ? (

                      <div className="invisible absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}

                  </div>
                  {formik.touched.username && formik.errors.username ? (

                    <p className=" hidden text-xs text-red-600 mt-2" id="username-error">{formik.errors.username}</p>
                  ) : null}
                </div>
              </>
            )}
          {
            formType === 'signup' && (
              <>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block mt-5 text-sm font-semibold text-slate-500 mb-2 dark:text-white">Password*</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" {...formik.getFieldProps('password')} placeholder="Your password here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    {formik.touched.password && formik.errors.password ? (
                      <div className=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-xs text-red-600 mt-2" id="password-error">{formik.errors.password}</p>
                  ) : null}
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="confirmPassword" className="block mt-5 text-sm font-semibold text-slate-500 mb-2 dark:text-white">Confirm Password*</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="confirmPassword" name="confirmPassword" {...formik.getFieldProps('confirmPassword')} placeholder="Confirm your password" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <p className="text-xs text-red-600 mt-2" id="password-error">{formik.errors.confirmPassword}</p>
                  ) : null}
                </div>
              </>
            )}
          {
            formType === "signin" && (
              <>
                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block mt-5 text-sm mb-2 text-slate-500 font-semibold dark:text-white">Password*</label>
                    <Link className="text-sm text-blue-600 decoration-2 hover:underline font-medium" to="/forgotpassword">Forgot password?</Link>
                  </div>
                  <div className="relative">
                    <input type="password" id="password" name="password" {...formik.getFieldProps('password')} placeholder="Your password here" className="py-3 px-8 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                    {formik.touched.password && formik.errors.password ? (
                      <div className=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    ) : null}
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <p className="text-xs text-red-600 mt-2" id="password-error">{formik.errors.password}</p>
                  ) : null}
                </div>
              </>
            )
          }
          {
            formType === "signup" && (
              <div className="px-4">
                <label htmlFor="select-1" className="block mt-5 text-sm font-semibold text-slate-500 mb-2 dark:text-white">I am signing up to:*</label>
                <select id="role" name="role" {...formik.getFieldProps('role')} className="py-3 px-4 pr-9 block w-full border border-slate-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" required>
                  <option defaultValue="">I am signing up to </option>
                  <option value="user">get hair services</option>
                  <option value="stylist">render hair services as a styist</option>
                  <option value="merchant">sell hair products as a merchant</option>
                </select>
                {formik.touched.role && formik.errors.role ? (
                  <p className="text-sm text-red-600 mt-2"> {formik.errors.role}</p>
                ) : null}
              </div>
            )
          }
          {
            formType === "signup" && (
              <button type="submit" className={`mt-8 py-3 px-20 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-violet-600 text-white hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`}>
                {/* {loading ? <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span> : "Sign Up"} */}
                Sign Up
              </button>
            )
          }
          {
            formType === "signin" && (
              <button type="submit" className={`mt-8 py-3 px-20 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-violet-600 text-white hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800`} >
                {/* {loading ? <span class="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full" role="status" aria-label="loading"></span> : "Sign In"} */}
                Sign In
              </button>
            )}

          {
            formType === "signup" && (
              <>
                <div className="p-2 sm:p-7">


                  <div className="text-center">
                    {/* <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1> */}
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Already have an account?
                      <Link className="text-violet-600 decoration-2 hover:underline font-medium" to="/signin">
                        Sign in here
                      </Link>
                    </p>
                  </div>

                  <div className="py-3 flex items-center text-xs text-slate-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
                  <div className="mt-5">
                    <button type="button" className="w-full py-3 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-slate-300 font-medium bg-white text-slate-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
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
            )}
          {
            formType === "signin" && (

              <>
                <div className="p-2 sm:p-7">


                  <div className="text-center">
                    {/* <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign in</h1> */}
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Don't have an account yet?
                      <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/signup">
                        Sign up here
                      </Link>
                    </p>
                  </div>
                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

                  <div className="mt-5">
                    <button type="button" className="w-full py-3 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-slate-300 font-medium bg-white text-slate-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
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
            )}
        </form>
      </main>
    </main>
  )

}

export default UserForm