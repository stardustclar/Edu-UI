import Navbar from "../comp/Navbar";

function SignIn() {
  return (
    <>
    <Navbar />
    <div className="max-w-[450px] h-[1000x] m-auto pt-16 px-10 mb-10 relative group font-Poppins">
      <img src="/images/back.svg" alt="" />
      <form action="">
        <h2 className="text-5xl font-bold py-6 text-midblue">Easy to learn, discover more skills</h2>
        <h2 className="text-base font-medium py-3">Sign in to your account</h2>
        <div className="flex flex-col py-2">
          <input className="border p-2" type="text" placeholder="Username or mobile number" />
        </div>
        <div className="flex flex-col py-2">
          <input className="border p-2" type="password" placeholder="Password" />
        </div>
        <button className="rounded-full h-10 w-full my-5 bg-blue-500 hover:bg-blue-700 text-white">
          <a href="/landing">Sign In</a>
        </button>
      </form>
    </div>
    </>
  );
}

export default SignIn;
