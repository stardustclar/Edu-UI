
function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center  bg-white text-white h-16 px-2 gap-6 py-2">
      <a href="/dashboard" className="px-4 py-2">
        <img src="/images/svg/home.svg" className="w-6 h-6" />
      </a>
      <a href="/mater" className="px-4 py-2">
        <img src="/images/svg/docu.svg" className="w-6 h-6" />
      </a>
      <a href="/leader" className="px-4 py-2">
        <img src="/images/svg/chart.svg" className="w-6 h-6" />
      </a>
      <a href="#" className="px-4 py-2">
        <img src="/images/svg/message.svg" className="w-6 h-6" />
      </a>
      <a href="/signin" className="px-4 py-2">
        <img src="/images/svg/user.svg" className="w-6 h-6" />
      </a>
    </nav>
  )
}

export default BottomNavbar