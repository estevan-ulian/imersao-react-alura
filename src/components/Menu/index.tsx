import { Dispatch, SetStateAction } from "react"
import Logo from "../Logo"
import Search from "./components/Search"
import Theme from "./components/Theme"

interface MenuProps {
    searchValue: string,
    setSearchValue: Dispatch<SetStateAction<string>>,
    dark: boolean,
    setDark: Dispatch<SetStateAction<boolean>>
}

function Menu({ searchValue, setSearchValue, dark, setDark }: MenuProps) {
    return (
        <header className={`flex flex-row h-14 justify-between items-center py-4 px-4 gap-4 fixed z-10 w-full bg-white border border-[#e5e5e5]`}>
            <Logo />
            <div className={`flex items-center gap-2`}>
                <Search setSearchValue={setSearchValue} searchValue={searchValue} />
                <Theme dark={dark} setDark={setDark} />
            </div>
        </header>
    )
}

export default Menu