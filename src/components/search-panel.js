import React from "react";

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #000',
        padding: '0 10px'

    };
    return <input placeholder={searchText}
                  className="foo"
                  style={searchStyle}/>
};

export default SearchPanel;