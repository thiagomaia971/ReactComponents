import React, { Component, PropTypes } from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.props.selectItem(this);
    }

    render() {

        var selected = this.props.isSelected;

        return (
            <li onClick={this.handlerClick}
                 role="presentation"
                className={selected == true ? "active" : ""}>

                <a href='javascript:void(0);"'>
                    {this.props.label}
                </a>

            </li>
        );
    }
}

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    isSelected: PropTypes.bool,
    key: PropTypes.number,
    selectItem: PropTypes.func,
    i: PropTypes.number
}

NavItem.defaultProps = {
    active: false,
    href: "/",
    isSelected: false
}

export default NavItem;