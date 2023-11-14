import { BsFacebook, BsGoogle } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
const Login = () => {
    return (
        <>
            <div className="bg-primary h-[100vh] py-10 px-5">
                <div className="bg-white rounded-3xl px-3 h-[90vh]">
                    <div className="flex mx-3 justify-between gap-5 pt-5">
                        <h2 className="text-base">Welcome to
                            <span className="text-primary text-xs font-bold"> LOREM</span>
                        </h2>
                        <div className="flex flex-col">
                            <h2 className="text-base">No Account ?</h2>
                            <span className="text-primary text-base">Sign Up</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-semibold">Sign In</h1>
                    <div className="mt-6 flex justify-center gap-3">
                        <div className="flex items-center justify-center gap-3 bg-primary bg-opacity-20 p-2 rounded-md">
                            <BsGoogle />
                            <p className="text-primary">Sign in with Google</p>
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-slate-500 bg-opacity-20 p-2 rounded-md">
                            <BsFacebook />
                        </div>
                        <div className="flex items-center justify-center gap-3 bg-slate-500 bg-opacity-20 p-2 rounded-md">
                            <AiFillApple />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex flex-col my-1">
                            <label htmlFor="email" className="mt-5 flex font-medium">Enter your username or email address</label>
                            <input type="text" name="email" id="email"
                                className="py-3 mt-2 border border-primary rounded-lg px-3"
                                placeholder="username or email address" />
                        </div>
                        <div className="flex flex-col my-1">
                            <label htmlFor="email" className="mt-5 flex font-medium ">Enter your Password</label>
                            <input type="text" name="email" id="email"
                                className="py-3 mt-2 border border-primary rounded-lg px-3"
                                placeholder="username or email address" />
                        </div>
                    </div>
                    <p className="flex justify-end text-base text-primary">Forgot Password</p>
                    <button className="bg-primary text-white py-3 rounded-lg mt-2">Sign In</button>
                </div>
            </div>
        </>
    )
}

export default Login