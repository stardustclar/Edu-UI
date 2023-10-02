import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

function BottomNavbar() {

  const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );
  
    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
  return (
    <nav className="fixed max-w-[450px] mx-auto bottom-0 left-0 right-0 flex justify-center  bg-white dark:bg-dark text-white h-16 px-2 gap-6 py-2">
      <a href="/dashboard" className="px-4 py-2">
        <img src="/images/svg/home.svg" className="w-6 h-6" />
      </a>
      <a href="/mater" className="px-4 py-2">
        <img src="/images/svg/docu.svg" className="w-6 h-6" />
      </a>
      <a href="/leader" className="px-4 py-2">
        <img src="/images/svg/chart.svg" className="w-6 h-6" />
      </a>
      <a href="/notif" className="px-4 py-2">
        <img src="/images/svg/message.svg" className="w-6 h-6" />
      </a>
      <a href="/signin" className="px-4 py-2">
        <img src="/images/svg/user.svg" className="w-6 h-6" />
      </a>

      <button type='button' onClick={toggleTheme} 
        className=' w-8 absolute z-10 right-2 top-3 py-[0.35rem] lg:right-7 text-lg p-1 rounded-md'>
        {theme === 'dark' ? <BsSunFill className="text-yellow-500" /> : <BsMoonFill className="text-slate-500"/>}
        </button>
    </nav>
  )
}

export default BottomNavbar