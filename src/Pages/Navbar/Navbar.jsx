import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/car.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";




const Navbar = () => {



    const { user, logOut, loading } = useContext(AuthContext)
    console.log(loading)


    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .then(error => {
                console.log(error)
            })
    }


    return (
        <div className="bg-[#234756]">
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/addproduct">Add Product</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/mycart">My Cart</NavLink></li>
                            <li className="text-black text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold text-black underline" : ""
                            } to="/login">Login</NavLink></li>

                        </ul>
                    </div>
                    <div className="ml-14 md:ml-0 flex items-center gap-2 ">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <h1 className=" text-center md:text-left text-base md:text-2xl lg:text-3xl font-extrabold"><span className="text-white">Rimberio</span> <span className="text-red-800">Automotive</span></h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5">
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-gray-50 font-bold underline" : ""
                        } to="/addproduct">Add Product</NavLink></li>
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/mycart">My Cart</NavLink></li>
                        <li className="text-white text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-gray-50 underline" : ""
                        } to="/login">Login</NavLink></li>


                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-5">
                    <div>

                    </div>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip" >
                                <div className="w-10 h-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>

                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg text-black font-bold bg-base-100 rounded-box w-52">
                                <li className="mb-1">
                                    <button className="px-5 py-3 rounded-lg bg-[#DE3163] text-white">{user.displayName}</button>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="px-5 py-3 rounded-lg bg-[#DE3163] text-white">SignOut</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to="/login">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/WsLGC0q/user.png" />
                                    </div>
                                </label>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;