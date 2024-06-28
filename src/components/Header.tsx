export default function Header()
{

    return (
        <header className="z-10 flex items-end w-full -mb-px bg-black">
          <div className="relative flex flex-col w-full mx-auto max-w-dashboard lg:px-0">
            <div className="absolute px-4 left-0 top-[40px] lg:top-[54px] z-30 transition ease-in-out duration-200 right-0 my-auto flex items-center justify-between mx-auto max-w-[600px] opacity-0 pointer-events-none scale-97 delay-[0ms]">
              <div className="flex items-center flex-grow w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3 text-gray-500 transition ease-in-out fill-current" viewBox="0 0 512 512">
                  <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                </svg>
                <input className="flex-grow w-full text-xl text-white transition ease-in-out bg-transparent search-input focus:outline-none" placeholder="Quick search..." />
              </div>
              <button type="button" className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-gray-500 fill-current w-7 h-7 hover:text-gray-200">
                  <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center px-4 lg:px-0 justify-between transition ease-in-out duration-200 flex-grow w-full py-8 lg:py-12 opacity-100">
              <div className="flex items-center gap-4">
                <span style={{ WebkitTouchCallout: 'none' }}>
                  <a href="/" className="flex justify-center p-2 rounded-full group">
                    <svg viewBox="0 0 153 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-6 text-gray-100 transition duration-150 ease-in-out fill-current hover:text-white">
                      <path d="M53.023 161.04c-15.454-6.074-28.905-17.473-37.327-33.276-18.778-35.237-5.436-79.027 29.802-97.805 34.318-18.289 76.747-6.111 96.285 27.086-9.254 21.45-24.019 44.116-43.523 65.213-14.389 15.563-29.831 28.623-45.237 38.782z"></path>
                      <path d="M3.368 178.128c-8.047-6.051-.282-26.133 9.765-39.764l3.11 4.391c-3.735 8.817-10.246 26.743 16.487 6.071 26.733-20.671 71.532-78.279 90.765-113.025 15.386-27.797-1.255-21.195-11.236-14.805l-4.377-2.354C118.023 8.816 135.69-3.019 144.145.701c18.34 8.07 4.683 60.555-36.56 111.448-41.243 50.893-92.864 74.517-104.217 65.979zM151.388 85.902c3.109 28.51-11.029 57.352-37.887 71.664-9.137 4.87-18.849 7.579-28.55 8.307 9.349-17.428 21.953-35.311 37.431-52.316 9.346-10.268 19.11-19.524 29.006-27.655z"></path>
                    </svg>
                  </a>
                </span>
                <div className="items-center transition ease-in-out lg:flex text-white gap-3">
                  <div className="flex items-center w-6 h-6 rounded-full aspect-square overflow-hidden">
                    <img src="https://cdn.discordapp.com/attachments/1034873798438174731/1256325098755981455/avatar.png?ex=66805b6c&is=667f09ec&hm=cfb9f7fb13d87eab1e8b93118dc68461d4c1ef4fe26dcb34ea179d521de1b632&" />
                  </div>
                  <h1>I Love Instatus</h1>
                </div>
              </div>
              <div className="relative z-10 flex flex-row items-center justify-end w-1/2 text-sm">
                <div tabIndex={-1} role="button" className="flex items-center justify-between px-3 py-2 my-auto mr-4 antialiased text-left text-white transition duration-200 ease-in-out bg-gray-900 border border-transparent rounded-lg w-[100px] hover:border-gray-800 cursor-text focus:border-gray-800 focus:outline-none">
                  <span>Search</span>
                  <span className="-my-1 -mr-px font-mono text-base text-gray-700">/</span>
                </div>
                <div className="hidden pl-3 lg:block">
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center w-full px-2 py-4 bg-white lg:py-10 lg:px-10 to lg:rounded-t-xl dark:bg-gray-980 dark:border-t dark:border-r dark:border-l dark:border-gray-900">
                <nav className="flex flex-col items-start w-full h-full md:justify-between md:items-center md:flex-row">
                  <div className="relative flex flex-wrap items-center w-full h-full py-2 text-xs lg:-ml-2 lg:text-sm">
                    <div className="no-underline mb-2 py-4 flex items-center font-medium leading-none rounded-lg text-gray-600 hover:text-black border-transparent px-4 dark:text-gray-300 dark:hover:text-white dark:border-transparent dark:px-4">
                      <h1>Status Pages</h1>
                    </div>
                    <div className="no-underline mb-2 py-4 flex items-center font-medium leading-none rounded-lg text-white bg-gray-900 px-3 mx-1 antialiased dark:text-white dark:bg-gray-900 dark:px-3 dark:mx-1 dark:antialiased">
                      <h1>Workspace settings</h1>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>)
}