import React, { Component, PropTypes } from 'react';

class TextBoxFor extends Component {

    constructor(){
        super();

        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let newValue = e.target.value;

        this.setState({value: newValue});
        this.props.onChange(newValue);

    }

    componentWillMount() {
        this.state = {
            value: this.props.value
        }
    }

    render() {

        return (
            <div className='form-group' style={{ margin: '10px' }}>

                <label htmlFor={this.props.name}>
                    {this.props.label}
                </label>

                <input id={this.props.name}
                    className='form-control'
                    type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.onChange}
                    ref={this.props.name} 
                    disabled={this.props.disabled}/>

            </div>
        )
    }

}

TextBoxFor.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

TextBoxFor.defaultProps = {
    inputType: 'text',
    disabled: false
}

export default TextBoxFor;