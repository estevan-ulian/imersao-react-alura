import Logo from "../Logo"
import Search from "./components/Search"

interface MenuProps {
    searchValue: string,
    setSearchValue: (str: string) => void
}

function Menu({ searchValue, setSearchValue }: MenuProps) {
    return (
        <header className={`flex flex-row h-14 justify-between items-center py-4 px-4 gap-4 fixed z-10 w-full bg-white border border-[#e5e5e5]`}>
            <div>
                <Logo />
            </div>
            <Search setSearchValue={setSearchValue} searchValue={searchValue} />
        </header>
    )
}

export default Menu