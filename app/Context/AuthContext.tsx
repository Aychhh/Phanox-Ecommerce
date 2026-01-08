
import { createContext, ReactNode } from "react";

interface StoreContextType {
    
}
interface AppProvider {
    children : ReactNode
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);



export const AppProvider = ({children} : AppProvider) => {
    return (
      <StoreContext.Provider value={{}}>
        {children}
      </StoreContext.Provider>
    )
}

export default StoreContext;