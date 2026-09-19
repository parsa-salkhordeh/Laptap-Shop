"use client"

import { createContext } from "react";

// interface ShopContextTtpe{
    
// }

export const ShopContext=createContext<null>(null);

export default function ShopProvider({children}){
    <ShopContext.Provider value={null}>
        {children}
    </ShopContext.Provider>
}

