import { useEffect, useState } from "react";
import ISearch from "./ISearch";
import './Search.css';

const Search = ({
    Placeholder = 'Placeholder',
    State = 'Default',
    Scale = 'Default',
    Shape = 'Default',
    RightIcon = false,
    DoubleIcon = true,
    SearchPlaceholder = '',
 }: ISearch) => {

    const [searchValue, setSearchValue] = useState(SearchPlaceholder);

    const showRightCloseIcon = DoubleIcon;
    const showRightSearchIcon = RightIcon && !DoubleIcon;
    const showLeftSearchIcon = !showRightSearchIcon;

    useEffect(() => {
        setSearchValue(SearchPlaceholder);
    }, [SearchPlaceholder])

    return (
        <div>
            <input
                onChange={e => setSearchValue(e.target.value)}
                placeholder={Placeholder}
                value={searchValue}>
                </input>
            <button type="submit"><img src="magnifying_glass.png" alt="Search" /></button>
        </div>
    )
}

export default Search;