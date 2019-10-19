import React from "react";

const SearchPanel = () => {
    const searchText = 'search';
    const searchStyle = {
        fontSize: '14px'
    };
    return <input placeholder={searchText}
                  className="foo"
                  style={searchStyle}/>
};

export default SearchPanel;