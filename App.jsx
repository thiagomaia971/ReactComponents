import React from 'react';
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

        //let files = $("#files")[0].files;
        let data = new FormData();

        for (var i = 0; i < files.length; i++) {
            data.append(files[i].name, files[i]);
        }

        //data.append("test", {name: "test"});

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

        return (
            <div>

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

export default App;