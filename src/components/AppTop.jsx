import searchIcon from "../assets/Icon_Search.svg"

const AppTop = (props) => {
    return ( 
        <div className="app-top">
            <div className="search-bar">
                <img src={searchIcon} alt="" />
                <input type="text" placeholder="Search Items" onChange={props.onInputChange}
                value={props.searchText}
                />
            </div>
            <button className="new-item-button">New Item</button>
        </div>
    );
}
 
export default AppTop;