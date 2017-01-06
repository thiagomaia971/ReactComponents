import React, { Component, PropTypes } from 'react';
import ReactDOM from "react-dom"
import NavItem from "./NavItem.jsx";

class NavTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: null
        }

        this.selectItem = this.selectItem.bind(this);

    }
    selectItem(item) {

        this.setState({
            selectedTab: item
        });
        
    }
/*
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
*/

    render() {

        var selectedKey = (this.state.selectedTab && this.state.selectedTab.props.i >= 0) ? this.state.selectedTab.props.i : null;

        var renderChildren = this.props.children.map((item, i) => {

            if (item.type === NavItem) {
                /*console.log(`\n\n\n\nSelectedItem: `);
                console.log(this.state.selectedTab);
                console.log(`SelectedKey: ${selectedKey}\nItem.Props.i: ${item.props.i}`)*/
                let isSelected = item.props.i == selectedKey;
                //console.log(`isSelected: ${isSelected}`);

                return React.cloneElement(item, {
                    isSelected: isSelected,
                    //iterable: i,
                    key: item.props.i,
                    selectItem: this.selectItem,
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