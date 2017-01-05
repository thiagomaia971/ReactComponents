import React, { Component, PropTypes } from 'react';
import NavItem from "./NavItem.jsx";

class NavTab extends Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
    }

    test() {
        let component;

        return this.props.children.map((c) => {
            return React.Children.map(c, (child) => {

                if (child.type === NavItem) {

                    return React.cloneElement(child, {
                        active: false
                    });
                }
            });
        });



    }

    render() {

        return (
            <ul className="nav nav-tabs">
                {this.test()}
            </ul>
        );
    }
}

export default NavTab;