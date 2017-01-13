import React, { Component, PropTypes } from 'react';

class DropdownItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li onClick={this.props.onClick}>
                <a href="#">{this.props.label}</a>
            </li>
        );
    }

}

DropdownItem.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

DropdownItem.defaultProps = {
    label: "",
}

export default DropdownItem;