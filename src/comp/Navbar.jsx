import {  useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
  <nav className={`flex  w-full`}>
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 ">
     <div className="flex items-center justify-between h-16">
    <div className="hidden md:block">
      <div className="ml-4 flex items-center space-x-3">
        <a
          href="/"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          home
        </a>
        <a
          href="onboard"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          onboard
        </a>
        <a
          href="subject"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          subject
        </a>
        <a
          href="video"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          video
        </a>
        <a
          href="live"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          live 
        </a>
        <a
          href="signin"
          className="text-gray-700  px-3 py-2 rounded-md text-sm font-medium"
        >
          sign in
        </a>
      </div>
    </div>
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-gray-700  px-2 py-1 rounded-md text-sm font-medium"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
     </div>
    </div>
{isOpen && (
  <div className="md:hidden">
    <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
      <a
        href="/"
        className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
      >
        home
      </a>
      <a
        href="onboard"
        className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
      >
        onboard
      </a>
      <a
        href="subject"
        className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
      >
        subject
      </a>
      <a
        href="video"
        className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
      >
        video
      </a>
      <a
        href="live"
        className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
      >
        live 
      </a>
      <a
          href="signin"
          className="text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
        >
          signin 
        </a>
    </div>
  </div>
)}

  </nav>
  )
}

export default Navbar