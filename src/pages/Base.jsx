import { useQuery, gql } from '@apollo/client'
import Dashboard from './Dashboard'
import { Helmet } from 'react-helmet'
import {useNavigate} from 'react-router-dom'


const IS_SIGNED_IN = gql`
	query IsSignedIn {
		isSignedIn @client
	}
`



const Base = () => {
  const { data } = useQuery(IS_SIGNED_IN)

  const navigate = useNavigate()


  return data.isSignedIn ? (
    <Dashboard />
  ) : (
    <main>
      <Helmet>
        <title>Lorde&apos;s | Home</title>
      </Helmet>
      <main className="pt-8 container mx-auto">
        <header className="max-w-[85rem] font-sans mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
              <h1 className="block text-3xl font-sans font-medium text-slate-800 sm:text-4xl lg:text-6xl lg:leading-tight">Great hair services with <span className="text-violet-600 font-semibold" >Lorde&apos;s</span></h1>
              <p className="mt-3 text-lg text-slate-500 dark:text-gray-400">Get styled by hand-picked professionals from the comfort of any location.</p>

              <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                <button onClick={() => navigate('/signin')} className="py-6 px-20 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-violet-800 text-white hover:bg-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-lg dark:focus:ring-offset-gray-800">Get Started
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/*-----------------image columns-------------*/}
            <div className="relative ml-4">
              <img className="w-full h-fit" src="/images/transparents/hero-test-2.png" alt="hero image" />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-violet-600 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

              <div className="absolute bottom-0 left-0">
                <svg className="w-2/3 ml-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                  <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                  <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                  <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                  <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                  <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                  <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                  <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                  <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                  <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                  <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                  <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="64" fill="currentColor" />
                  <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                  <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                  <rect x="531" y="49" width="99" height="99" fill="currentColor" />
                </svg>
              </div>

            </div>
          </div>

        </header>
        {/*------heder-end-------*/}
        <main className="container mx-auto pt-10 px-4 mt-36">
          <h2 className="font-sans text-6xl font-semibold text-center text-slate-800">Features</h2>
          <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="aspect-w-16 aspect-h-7">
              <img className="w-full object-cover rounded-xl" src="/images/first-section.webp" alt="Image Description" />
            </div>
            {/*------grid-start---------*/}
            {/*-------first-section-----*/}
            <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <h2 className="font-bold text-2xl md:text-3xl font-sans text-violet-800 dark:text-gray-200">
                  We tackle the challenges start-ups face
                </h2>
                <p className="mt-2 md:mt-4 text-slate-500">
                  Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-8 md:gap-12">

                  <div className="flex gap-x-5">
                    <svg className="flex-shrink-0 mt-1 w-6 h-6 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                      <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-sans font-semibold text-violet-800 dark:text-white">
                        Creative minds
                      </h3>
                      <p className="mt-1 font-sans text-slate-600 dark:text-gray-400">
                        We choose our teams carefully. Our people are the secret to great work.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5">
                    <svg className="flex-shrink-0 mt-1 w-6 h-6 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-sans font-semibold text-violet-800 dark:text-white">
                        Simple and affordable
                      </h3>
                      <p className="mt-1 text-slate-600 dark:text-gray-400">
                        From boarding passes to movie tickets, there&apos;s pretty much nothing you can&apos;t store with Preline.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5">
                    <svg className="flex-shrink-0 mt-1 w-6 h-6 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                      <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-sans font-semibold text-violet-800 dark:text-white">
                        Industry-leading documentation
                      </h3>
                      <p className="mt-1 text-slate-600 dark:text-gray-400">
                        Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-x-5">
                    <svg className="flex-shrink-0 mt-1 w-6 h-6 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z" />
                    </svg>
                    <div className="grow">
                      <h3 className="text-lg font-sans font-semibold text-violet-800 dark:text-white">
                        Designing for people
                      </h3>
                      <p className="mt-1 text-slate-600 dark:text-gray-400">
                        We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/*----grid-end-----*/}

          </section>
          {/*----end-of-first-section----*/}
          {/*---start-of-second-section-----*/}
          <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <div>
                <img className="rounded-xl" src="/images/transparents/lady-in-yellow.png" alt="Image Description" />
              </div>
              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">

                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-slate-700 dark:text-gray-200">
                      We tackle the challenges start-ups face
                    </h2>
                    <p className="text-gray-500">
                      Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                    </p>
                  </div>



                  <ul role="list" className="space-y-2 sm:space-y-4">
                    <li className="flex space-x-3">

                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        <span className="font-bold">Easy & fast</span> designing
                      </span>
                    </li>

                    <li className="flex space-x-3">

                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        Powerful <span className="font-bold">features</span>
                      </span>
                    </li>

                    <li className="flex space-x-3">

                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        User Experience Design
                      </span>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
              <h2 className="text-3xl lg:text-4xl text-slate-700 font-bold dark:text-gray-200">
                Explore <span className="text-violet-600"> lorde's</span>
              </h2>
              <p className="mt-3 text-gray-800 dark:text-gray-200">
                The powerful and flexible theme for all kinds of businesses.
              </p>
            </div>

            <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">

              <div className="col-span-6 sm:col-span-4 text-center">
                <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <div className="mt-2 sm:mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Responsive
                  </h3>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-4 text-center">
                <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                  <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                  <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
                <div className="mt-2 sm:mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Customizable
                  </h3>
                </div>
              </div>



              <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
                <svg className="mx-auto h-auto w-7 md:w-9 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <div className="mt-2 sm:mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    24/7 Support
                  </h3>
                </div>
              </div>

            </div>


            <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
              <div className="hidden md:block col-span-4 md:col-span-3">
                <img className="rounded-xl" src="/images/second-section.png" alt="Image Description" />
              </div>


              <div className="col-span-4 md:col-span-3">
                <img className="rounded-xl" src="/images/third-section-1.webp" alt="Image Description" />
              </div>


              <div className="col-span-4 md:col-span-3">
                <img className="rounded-xl" src="/images/third-section-3.jpg" alt="Image Description" />
              </div>


              <div className="col-span-4 md:col-span-3">
                <img className="rounded-xl" src="/images/third-section-2.webp" alt="Image Description" />
              </div>

            </div>

          </section>
          {/*----------end of second section------------*/}
          {/*----------start of third section----------*/}
          <section className="max-w-[85rem] px-4 py-10 mt-28 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="lg:col-span-7">

                <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                  <div className="col-span-4">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80" alt="Image Description" />
                  </div>


                  <div className="col-span-3">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                  </div>


                  <div className="col-span-5">
                    <img className="rounded-xl" src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="Image Description" />
                  </div>

                </div>

              </div>


              <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                <div className="space-y-6 sm:space-y-8">

                  <div className="space-y-2 md:space-y-4">
                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                      Collaborative tools to design user experience
                    </h2>
                    <p className="text-gray-500">
                      Use our tools to explore your ideas and make your vision come true. Then share your work easily.
                    </p>
                  </div>



                  <ul role="list" className="space-y-2 sm:space-y-4">
                    <li className="flex space-x-3">
                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        <span className="font-bold">Less routine</span> – more creativity
                      </span>
                    </li>

                    <li className="flex space-x-3">

                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        Hundreds of thousands saved
                      </span>
                    </li>

                    <li className="flex space-x-3">

                      <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fillOpacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                      </svg>


                      <span className="text-sm sm:text-base text-gray-500">
                        Scale budgets <span className="font-bold">efficiently</span>
                      </span>
                    </li>
                  </ul>

                </div>
              </div>

            </div>

          </section>
          {/*----end of thrid section---------*/}
          {/*-------start of faq section-------*/}
          <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className="max-w-xs">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently<br></br>asked questions</h2>
                  <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
                </div>
              </div>


              <div className="md:col-span-3">

                <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                      Can I cancel at anytime?
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                      <p className="text-gray-600 dark:text-gray-400">
                        Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
                      </p>
                    </div>
                  </div>

                  <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                      My team has credits. How do we use them?
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                      <p className="text-gray-600 dark:text-gray-400">
                        Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
                      </p>
                    </div>
                  </div>

                  <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                      How does Preline&apos;s pricing work?
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                      <p className="text-gray-600 dark:text-gray-400">
                        Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
                      </p>
                    </div>
                  </div>

                  <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                      How secure is Preline?
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                      <p className="text-gray-600 dark:text-gray-400">
                        Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
                      </p>
                    </div>
                  </div>

                  <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                      How do I get access to a theme I purchased?
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                      <p className="text-gray-600 dark:text-gray-400">
                        If you lose the link for a theme you purchased, don&apos;t panic! We&apos;ve got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn&apos;t create a login or can&apos;t remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
                      </p>
                    </div>
                  </div>

                  <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                      Upgrade License Type
                      <svg className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <svg className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                      <p className="text-gray-600 dark:text-gray-400">
                        There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </section>
        </main>
      </main>
    </main>
  )
}


export default Base;

