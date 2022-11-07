import Logo from "./Logo"

function Menu() {
    return (
        <header className={`
        flex flex-row h-14 justify-between
        items-center py-4 px-4 gap-4 fixed w-full
        bg-white border border-[#e5e5e5]
      `}
        >
            <Logo />
        </header>
    )
}

export default Menu