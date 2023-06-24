import './SearchBar.scss';

import filterIcon from '../../assets/filter-icon.svg';

function SearchBar() {


    return (
        <div className='searchBar'>
            <input type="text" placeholder='Search a pet' className='searchBar__input'/>
            <div className="searchBar__filter-container">
                <img src={filterIcon} alt="filter icon" className="searchBar__filter-icon" />
            </div>

        </div>
    );
}

export default SearchBar;
