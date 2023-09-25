
function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center  bg-white text-white h-16 px-2 gap-6 py-2">
      <a href="#" className="px-4 py-2">
        <img src="/images/home.svg" className="w-6 h-6" />
      </a>
      <a href="#" className="px-4 py-2">
        <img src="/images/doc.svg" className="w-6 h-6" />
      </a>
      <a href="#" className="px-4 py-2">
        <img src="/images/chart.svg" className="w-6 h-6" />
      </a>
      <a href="#" className="px-4 py-2">
        <img src="/images/message.svg" className="w-6 h-6" />
      </a>
      <a href="#" className="px-4 py-2">
        <img src="/images/user.svg" className="w-6 h-6" />
      </a>
    </nav>
  )
}

export default BottomNavbar