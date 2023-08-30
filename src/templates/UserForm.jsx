import { useFormik } from "formik"
import { useState } from 'react'
import { Helmet } from "react-helmet"


//TODO: do css and javascript client side validataion.
//this has to be a joke and probably something is definitely wrong.
const UserForm = ({ formType, action }) => {

    const [values, setValues] = useState()

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            role: ''
        },
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
        <main className="w-full h-screen p-4 flex justify-center items-center flex-col">
            <Helmet>
                <meta charSet="UTF-8" />
                <title>Lorde's - {formType === 'signup' ? 'Sign Up' : 'Sign In'}</title>
            </Helmet>
            <header className="w-5/11 h-40 rounded-lg p-6 flex justify-around items-center flex-col text-center bg-blue-500 text-white mb-6">
                {formType === 'signup' ? 
                <>
                    <h1 className="text-3xl font-semibold break-words capitalize">Join the Millions of people to access the best of hair services and products</h1>
                    <p>Sign up and start enjoying the services provided my millions of stylist</p>
                </>: 
                <>
                    <h1 className="text-3xl font-semibold break-words capitalize">Welcome back to Hair Nirvana</h1>
                    <p>Let's make that hair look great</p>
                </>}
            </header>
            <form onSubmit={formik.handleSubmit} className="w-6/12 border-2 rounded-lg p-8 flex flex-col h-auto justify-between items-center">
                <section className="w-8/12 flex justify-evenly items-center p-2 mb-8">
                {
                    formType === 'signup' ?
                        <>
                            <label htmlFor="email" className="text-lg font-medium">Email: </label>
                            <input type="email" name="email" id="email" className="border-solid border-2 w-60 ml-12 border-black rounded-md px-4 h-10" placeholder="Enter your email address" required onChange={formik.handleChange} value={formik.values.email}/>
                        </>
                        :
                        <>
                            <label htmlFor="email" className="text-lg font-medium">Email: </label>
                            <input type="email" name="email" id="email" placeholder="Enter your email address" className="border-solid border-2 w-60 ml-12 border-black rounded-md px-4 h-10" onChange={formik.handleChange} value={formik.values.email}/>
                        </>
            }
                    
                </section>
                <section className="w-8/12 flex justify-evenly items-center p-2 mb-8">
                {
                    formType === 'signup' ?
                    <>
                        <label htmlFor="username" className="text-lg font-medium">Username: </label>
                        <input type="text" name="username" id="username" placeholder="Enter a unique username" className="border-solid border-2 w-60 ml-3 border-black rounded-md px-4 h-10 " required onChange={formik.handleChange} value={formik.values.username}/>                    
                    </>
                    :
                    <>
                        <label htmlFor="username" className="text-lg font-medium">Username: </label>
                        <input type="text" name="username" id="username" placeholder="Enter a unique username" className="border-solid border-2 w-60 ml-3 border-black rounded-md px-4 h-10 " onChange={formik.handleChange} value={formik.values.username}/>
                    </>
                }
                    
                </section>
                <section className="w-8/12 flex justify-evenly items-center p-2 mb-8">
                    <label htmlFor="password" className="text-lg font-medium">Password: </label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" minLength="8" className="border-solid border-2 w-60 ml-4 border-black rounded-md px-4 h-10" required onChange={formik.handleChange}  value={formik.values.password}/>
                </section>
                {
                    formType === 'signup' ? 
                    <section className="w-8/12 p-2 mb-4">
                        <p className="text-lg font-medium text-blue-600">What are you signing up as ? </p>
                        <input type="radio" className="mr-4 mb-4" name="user" id="user" value="user" onChange={formik.handleChange}/>
                        <label htmlFor="user" className="font-medium capitalize">User(I want to recieve hair services)</label>
                        <br/>
                        <input type="radio" className="mr-4" name="stylist" id="stylist" value="stylist" onChange={formik.handleChange}/>
                        <label htmlFor="stylist" className="font-medium capitalize">Stylist(I want to provide hair serivces)</label>
                    </section> : 
                    <></>
                }
                
                <button type="submit" className="w-6/12 bg-blue-600 rounded-full p-3 text-white text-lg font-medium hover:bg-cyan-400 transition-all">{formType === 'signup' ? 'Done' : 'Sign In'}</button>
            </form>
        </main>
    )

}

export default UserForm