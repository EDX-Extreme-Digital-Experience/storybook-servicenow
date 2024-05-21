import { useEffect, useState } from "react";
import ISearch from "./ISearch";

const Search = ({
    Placeholder = 'Placeholder',
    State = 'Default',
    Scale = 'Default',
    Shape = 'Default',
    CloseIcon = false,
    SearchIcon = true,
    SearchPlaceHolder = '',
 }: ISearch) => {

    const [searchValue, setSearchValue] = useState(SearchPlaceHolder);

    useEffect(() => {
        setSearchValue(SearchPlaceHolder);
    }, [SearchPlaceHolder])

    return (
        <div>
            <input
                onChange={e => setSearchValue(e.target.value)}
                placeholder={Placeholder}
                value={searchValue}>
                </input>
            <button></button>
        </div>
    )
}

export default Search;