import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom"
import NavItem from "./NavItem.jsx";

class NavTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.asd()
        }

        this.selectItem = this.selectItem.bind(this);

    }

    asd() {
        let c = this.props.children[0];

        this.props.children.map((child, i) => {
            if (child.props.isSelected === true)
                c= child;
        });

        return c;
    }

    selectItem(item) {

        this.setState({
            selectedTab: item
        });

    }

    render() {



        var selectedKey = (this.state.selectedTab && this.state.selectedTab.props.i >= 0) ? this.state.selectedTab.props.i : null;

        var renderChildren = this.props.children.map((item, i) => {
            if (item.type === NavItem) {
                let isSelected = item.props.i == selectedKey;

                return React.cloneElement(item, {
                    isSelected: isSelected,
                    key: i,
                    selectItem: this.selectItem,
                    i: i
                });
            }
        });

        return (
            <div className="tabs">
                <ul className="nav nav-tabs">
                    {renderChildren}
                </ul>
                <div className="tab-container">
                    {
                        (this.state.selectedTab != null) ?
                            
                            this.state.selectedTab.props.children
                        :
                        ""
                    }
                </div>
            </div>
        );
    }
}

export default NavTab;