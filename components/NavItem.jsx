import React, { Component, PropTypes } from 'react';

class NavItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: this.props.active
        }
    }

    render () {

        const isActive = (this.props.active) ? 'active' : '';

        return (
            <li role="presentation" className={this.props.active}><a href={this.props.href}>{this.props.label}</a></li>
        );
    }
}

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool
}

NavItem.defaultProps = {
    active: false,
    href: "#"
}

export default NavItem;