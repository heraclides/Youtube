import { type } from "@testing-library/user-event/dist/type";
import { ReactNode, createContext, useState } from "react";

type UserProps = {
    children: ReactNode;
}

type ValorType = {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void
}

const valorInicial = {
    openMenu: true,
    setOpenMenu: () => {}
}

export const OpenMenu = createContext<ValorType>(valorInicial);

export const UserState = ({children}: UserProps) => {
    const [openMenu, setOpenMenu] = useState(valorInicial.openMenu);

    return(
        <OpenMenu.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </OpenMenu.Provider>
    )
}