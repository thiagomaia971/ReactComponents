import React, { Component, PropTypes } from 'react';

class NavItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: this.props.active
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(){
        this.props.onClick(this.props.iterable);
    }

    render () {
        return (
            <li onClick={this.handlerClick} id={"tab-"+this.props.iterable} key={this.props.key} role="presentation" className={this.props.active}><a href={this.props.href}>{this.props.label}</a></li>
        );
    }
}

NavItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool,
    key: PropTypes.number,
    onClick: PropTypes.func,
    iterable: PropTypes.number
}

NavItem.defaultProps = {
    active: false,
    href: "#"
}

export default NavItem;