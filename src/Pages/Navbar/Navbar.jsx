import { NavLink } from "react-router-dom";
import  logo  from "../../assets/car.png";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="text-[#232a34] text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold underline" : ""
                            } to="/">Home</NavLink></li>
                            <li className="text-[#232a34] text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold underline" : ""
                            } to="/addproduct">Add Product</NavLink></li>
                            <li className="text-[#232a34] text-lg hover:text-[#46d993] font-bold"><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold underline" : ""
                            } to="/mycart">My Cart</NavLink></li>

                        </ul>
                    </div>
                    <div className="ml-14 md:ml-0 flex items-center gap-2 ">
                        <img className="w-10 h-10" src={logo} alt="" />
                        <h1 className=" text-center md:text-left text-base md:text-2xl lg:text-3xl font-extrabold"><span className="text-slate-950">Rimberio</span> <span className="text-red-800">Automotive</span></h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-5">
                        <li className="text-black text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-violet-950 underline" : ""
                        } to="/">Home</NavLink></li>
                        <li className="text-black text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? " text-violet-950 font-bold underline" : ""
                        } to="/addproduct">Add Product</NavLink></li>
                        <li className="text-[#232a34] text-lg hover:text-[#46d993] font-medium"><NavLink className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-violet-950 underline" : ""
                        } to="/mycart">My Cart</NavLink></li>
                        

                    </ul>
                </div>
                <div className="navbar-end">
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;