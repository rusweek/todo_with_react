import React, {Component} from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {

    constructor(){
        super();

        this.state = {
            term: ''
        };

        this.onSearchChange = (event) => {
            const term = event.target.value;
            this.setState({term});
            this.props.onSearchChange (term);
        }
    }


    render(){
        return <input type="text" placeholder="search"
                      className="form-control search-input mr-1"
                      value={this.state.term}
                      onChange={this.onSearchChange}
        />
    }
}

