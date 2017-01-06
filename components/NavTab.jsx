import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom"
import NavItem from "./NavItem.jsx";

class NavTab extends Component {

    constructor(props) {
        super(props);
    }

    getInitialState() {
        return {
            selectedTab: null
        }
    }

    selectItem(item) {
        this.setState({
            selectedTab: item
        });
    }

    handleClick(i) {
        let childSelected = this.props.children[i];

        return this.props.children.map((c, i) => {
            if (c.type === NavItem) {
                if (c === childSelected) {

                    return React.cloneElement(c, {
                        active: true,
                        label: "test"
                    });

                } else {
                    c = React.cloneElement(c, {
                        active: false
                    })
                }
            }
        });
    }


    render() {

        var selectedKey = (this.state.selectedTab && this.state.selectedTab.props.key) || null;

        var renderChildren = this.props.children.map((c, i) => {

            if (c.type === NavItem) {
                return React.cloneElement(c, {
                    active: false,
                    key: i,
                    iterable: i,
                    onClick: (_i) => { this.handleClick(_i) }
                });
            }

        });

        return (
            <ul className="nav nav-tabs">
                {renderChildren}
            </ul>
        );
    }
}

export default NavTab;