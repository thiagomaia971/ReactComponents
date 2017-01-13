import React, { PropTypes } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";

import ButtonExample from './examples/ButtonExample.jsx';
import DropdownExample from './examples/DropdownExample.jsx';
import NavTabExample from './examples/NavTabExample.jsx';
import InputFileExample from './examples/InputFileExample.jsx';
import { TypeColors } from "./components/Button.jsx";

import TextBoxFor from "./components/TextBoxFor.jsx";
import Dropdown from "./components/Dropdown.jsx";
import DropdownItem from "./components/DropdownItem.jsx";
import NavTab from "./components/NavTab.jsx";
import NavItem from "./components/NavItem.jsx";
import InputFile from "./components/InputFile.jsx";

import { fetchSuccess, fetchDanger } from "./actions/fetch";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            id: 0
        };
        this.onClickUploadFile = this.onClickUploadFile.bind(this);
    }

    onClickUploadFile(files) {

        let data = new FormData();

        for (var i = 0; i < files.length; i++) {
            data.append(files[i].name, files[i]);
        }

        $.ajax({
            type: "POST",
            url: "http://localhost:59617/api/values/file",
            contentType: false,
            processData: false,
            data: data,
            success: (message) => {
                console.log(message);
            }
        });

    }

    render() {

        const {fetchSuccess, fetchStart} = this.props;

        return (
            <div onClick={() => {fetchStart()}}>

                <ButtonExample />

                <DropdownExample />

                <TextBoxFor placeholder="Nome" name={'Nome'} value={this.state.nome} onChange={(value) => { this.setState({ nome: value }) } } inline={true} leftLabel="@" />
                <TextBoxFor placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => { this.setState({ id: value }) } } inline={true} width="300px" leftLabel="R$" rightLabel="@" />
                <TextBoxFor label="Id" placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => { this.setState({ id: value }) } } inline={true} disabled={true} />

                <NavTabExample />

                <InputFileExample />

            </div>
        );
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired,
    fetchSuccess: PropTypes.func.isRequired,
    fetchDanger: PropTypes.func.isRequired,
    fetchStart: PropTypes.func.isRequired
}

App.defaultProps = {
    message: ''
}

function mapStateToProps(state) {
    return {
        message: state.fetch.message,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSuccess, fetchDanger, fetchStart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);