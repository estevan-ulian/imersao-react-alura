import { Dispatch } from "react"

interface SearchProps {
    searchValue: string,
    setSearchValue: (str: string) => void
}

function Search({ searchValue, setSearchValue }: SearchProps) {

    return (
        <div>
            <input
                className={`border border-gray-300 focus:border-gray-500 focus:outline-none px-2 py-1`}
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </div>
    )
}

export default Search