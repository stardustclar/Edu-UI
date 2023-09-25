import { useState } from "react";
import Navbar from "../comp/Navbar";
import { FaEllipsisV } from "react-icons/fa";

function Notif() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
        <div className="flex flex-row py-2 px-4 gap-2">
          <img src="/images/back.svg" alt="" />
          <h1 className="py-1 font-semibold">Notifications</h1>
          <div className="md:hidden py-2 ml-20">
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
              <FaEllipsisV />
            )}
          </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
              >
                Mute notification
              </a>
              <a
                href="onboard"
                className="text-gray-700  block px-3 py-2 rounded-md text-base font-medium"
              >
                Clear all
              </a>
            </div>
          </div>
        )}

        <div className="flex flex-col py-6">
          <div className="flex flex-row gap-4 py-3">
            <img src="/images/shion.png" alt="" />
            <div className="flex flex-col">
              <h1>Erika send a new message</h1>
              <h2 className="text-slate-500">2 min ago</h2>
            </div>
            <img src="/images/reddot.svg" alt="" />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/shion.png" alt="" />
            <div className="flex flex-col">
              <h1>Shion send a new message</h1>
              <h2 className="text-slate-500">3 min ago</h2>
            </div>
            <img src="/images/reddot.svg" alt="" />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <span className="w-12 h-12 relative bg-green-500 rounded-[48px]">
              <img src="/images/check.svg" className="py-3 mx-auto" />
            </span>
            <div className="flex flex-col">
              <h1>You have purchased the course</h1>
              <h2 className="text-slate-500">5 min ago</h2>
            </div>
          </div>

          <div className="flex flex-row gap-4 py-3">
            <span className="w-12 h-12 relative pb-2 rounded-[48px]">
              <img src="/images/alert.svg" className="py-3 mx-auto" />
            </span>
            <div className="flex flex-col">
              <h1>Your account has expired</h1>
              <h2 className="text-slate-500">10 min ago</h2>
            </div>
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/masson.png" alt="" />
            <div className="flex flex-col">
              <h1>Mason send a new message</h1>
              <h2 className="text-slate-500">40 min ago</h2>
            </div>
            <img src="/images/reddot.svg" alt="" />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/s.png" alt="" />
            <div className="flex flex-col">
              <h1>Shion send a new message</h1>
              <h2 className="text-slate-500">1 days ago</h2>
            </div>
            <img src="/images/reddot.svg" alt="" />
          </div>

          <div className="flex flex-row gap-4 py-3">
            <span className="w-12 h-12 relative bg-green-500 rounded-[48px]">
              <img src="/images/check.svg" className="py-3 mx-auto" />
            </span>
            <div className="flex flex-col">
              <h1>You have purchased the course</h1>
              <h2 className="text-slate-500">2 days ago</h2>
            </div>
          </div>

          <div className="flex flex-row gap-4 py-3">
            <img src="/images/njug.png" alt="" />
            <div className="flex flex-col">
              <h1>Njug send a new message</h1>
              <h2 className="text-slate-500">3 days ago</h2>
            </div>
            <img src="/images/reddot.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Notif;
