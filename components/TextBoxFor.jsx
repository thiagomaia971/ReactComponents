import React, { Component, PropTypes } from 'react';

class TextBoxFor extends Component {

    constructor(props){
        super(props);

        this.state = {
            value: this.props.value
        }

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

        const styleFormGroup = {
            display: (this.props.inline) ? 'inline-block' : 'block',
            margin: '10px 10px 5px 5px',
            width: this.props.width
        }

        const styleInput = {
            display: "initial"
        }

        return (
            <div className='form-group' style={ styleFormGroup } >

                <label htmlFor={ this.props.name } >
                    { this.props.label }
                </label>

                <input id={ this.props.name }
                    className='form-control'
                    type={ this.props.inputType }
                    placeholder={ this.props.placeholder }
                    defaultValue={ this.state.value }
                    onChange={ (e) => this.props.onChange(e.target.value) }
                    disabled={ this.props.disabled }
                    style={styleInput}/>

            </div>
        )
    }

}

TextBoxFor.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    label: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    width: PropTypes.string,
    inline: PropTypes.bool
}

TextBoxFor.defaultProps = {
    inputType: 'text',
    disabled: false,
    width: '200px',
    inline: false
}

export default TextBoxFor;