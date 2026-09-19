"use client"

import { createContext } from "react";
import toast from "react-hot-toast";
// interface ShopContextTtpe{
    
// }

export const ShopContext=createContext<null>(null);

export default function ShopProvider({children}:any){

    function addToCard(){
        toast.success("محصول به سبد خرید اضافه شد");
    }
 return(
    <ShopContext.Provider value={}>
        {children}
    </ShopContext.Provider>
 )
    
}

