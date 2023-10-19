import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Cartdetails from "./Cartdetails";
import Footer from "../Footer/Footer";


const MyCart = () => {
    const { user } = useContext(AuthContext)
    const [carts, setCarts] = useState([])
    const email = user?.email;
    console.log(email, user)

    useEffect(() => {
        fetch(`http://localhost:5000/addTocart/${email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
            })
    }, [email])



    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-5 min-h-screen mt-10 px-2 lg:px-0">
                {
                    carts.map(cart => <Cartdetails key={cart._id} cart={cart} carts={carts} setCarts={setCarts}></Cartdetails>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyCart;