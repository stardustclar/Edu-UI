import BottomNavbar from "../comp/BottomNavbar"

function LeaderBoard() {
  return (
    <div className="max-w-[450px] h-[1000px] m-auto pt-16 px-10 mb-10 relative group font-Poppins dark:bg-dark">   
        <div className="flex flex-row py-2 mx-auto gap-8">
            <div className="mt-10">
                <h1 className="text-center dark:text-white">2</h1>
                <img src="/images/leader/up.svg" className="ml-8 py-2"/>
                <img src="/images/leader/jacob.svg" alt="" />
                <h2 className="font-semibold py-2 opacity-80 text-center dark:text-white">Jacobaa</h2>
                <h3 className="text-red-500 text-center font-semibold">98P</h3>
            </div>
            <div>
                <h1 className="text-center dark:text-white">1</h1>
                <img src="/images/leader/crown.svg" className="ml-8 py-2"/>
                <img src="/images/leader/devi.svg" alt="" />
                <h2 className="font-semibold py-2 opacity-80 text-center dark:text-white">Deviyani</h2>
                <h3 className="text-red-500 text-center font-semibold">98P</h3>
            </div>
            <div className="mt-10">
                <h1 className="text-center dark:text-white">3</h1>
                <img src="/images/leader/down.svg" className="ml-8 py-2"/>
                <img src="/images/leader/robert.svg" alt="" />
                <h2 className="font-semibold py-2 opacity-80 text-center dark:text-white">Roberter</h2>
                <h3 className="text-red-500 text-center font-semibold">98P</h3>
            </div>
        </div>  

        <div className="py-6">
        <div className="flex flex-row gap-3 py-6">
            <div>
            <h1 className="text-center dark:text-white">4</h1>
            <img src="/images/leader/up.svg" />
            </div>
            <div className="flex flex-row gap-4">
              <img src="/images/leader/sander.svg" alt="" />
              <h1 className="text-midblue font-semibold py-2 mr-16 dark:text-white">Sanderly</h1>
              <h2 className="text-green-500 font-semibold py-2">90P</h2>
            </div>
        </div>

        <div className="flex flex-row gap-3 py-6">
            <div>
            <h1 className="text-center dark:text-white">5</h1>
            <img src="/images/leader/down.svg" />
            </div>
            <div className="flex flex-row gap-4">
              <img src="/images/leader/cris.svg" alt="" />
              <h1 className="text-midblue font-semibold py-2 mr-16 dark:text-white">Cris Jeny</h1>
              <h2 className="text-green-500 font-semibold py-2">88P</h2>
            </div>
        </div>

        <div className="flex flex-row gap-3 py-6">
            <div>
            <h1 className="text-center dark:text-white">6</h1>
            <img src="/images/leader/up.svg" />
            </div>
            <div className="flex flex-row gap-4">
              <img src="/images/leader/juli.svg" alt="" />
              <h1 className="text-midblue font-semibold py-2 mr-16 dark:text-white">
                <a href="/julian">Julian Fox</a>
              </h1>
              <h2 className="text-green-500 font-semibold py-2">86P</h2>
            </div>
        </div>

        <div className="flex flex-row gap-3 py-6">
            <div>
            <h1 className="text-center dark:text-white">7</h1>
            <img src="/images/leader/up.svg" />
            </div>
            <div className="flex flex-row gap-4">
              <img src="/images/leader/daud.svg" alt="" />
              <h1 className="text-midblue font-semibold py-2 mr-16 dark:text-white">Daod Tros</h1>
              <h2 className="text-green-500 font-semibold py-2">85P</h2>
            </div>
        </div>

        <div className="flex flex-row gap-3 py-6">
            <div>
            <h1 className="text-center dark:text-white">8</h1>
            <img src="/images/leader/down.svg" />
            </div>
            <div className="flex flex-row gap-4">
              <img src="/images/leader/miami.svg" alt="" />
              <h1 className="text-midblue font-semibold py-2 mr-16 dark:text-white">Miami Dondo </h1>
              <h2 className="text-green-500 font-semibold py-2">80P</h2>
            </div>
        </div>
        </div>
        <BottomNavbar />   
    </div>
  )
}

export default LeaderBoard