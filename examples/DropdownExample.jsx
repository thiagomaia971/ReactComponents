import React, { Component } from 'react';
import { TypeColors } from "../components/Button.jsx";
import Dropdown from "../components/Dropdown.jsx";
import DropdownItem from "../components/DropdownItem.jsx";

import { container, styleExample, styleLblExample } from './Styles.jsx';

export default class DropdownExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: `<Dropdown label="Action" btnColor={TypeColors.DEFAULT} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>

<Dropdown label="Action" btnColor={TypeColors.SUCCESS} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>

<Dropdown label="Action" btnColor={TypeColors.INFO} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>

<Dropdown label="Action" btnColor={TypeColors.WARNING} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>

<Dropdown label="Action" btnColor={TypeColors.DANGER} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>

<Dropdown label="Action" btnColor={TypeColors.PMENOS} inline={true}>
    <DropdownItem label="A" onClick={() => { console.log("a") } } />
    <DropdownItem label="B" onClick={() => { console.log("b") } } />
    <DropdownItem label="C" onClick={() => { console.log("c") } } />
    <DropdownItem label="D" onClick={() => { console.log("d") } } />
</Dropdown>`
        }

    }

    render() {
        return (
            <div style={container}>

                <div className="bs-docs-section">

                    <h1 className="page-header">Dropdowns</h1>

                    <div className="bs-example" style={styleExample}>

                        <p style={styleLblExample}>Exemplo</p>

                        <div className="btn-toolbar" role="toolbar">
                            <Dropdown label="Action" btnColor={TypeColors.DEFAULT} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>

                            <Dropdown label="Action" btnColor={TypeColors.SUCCESS} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>

                            <Dropdown label="Action" btnColor={TypeColors.INFO} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>

                            <Dropdown label="Action" btnColor={TypeColors.WARNING} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>

                            <Dropdown label="Action" btnColor={TypeColors.DANGER} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>

                            <Dropdown label="Action" btnColor={TypeColors.PMENOS} inline={true}>
                                <DropdownItem label="A" onClick={() => { console.log("a") } } />
                                <DropdownItem label="B" onClick={() => { console.log("b") } } />
                                <DropdownItem label="C" onClick={() => { console.log("c") } } />
                                <DropdownItem label="D" onClick={() => { console.log("d") } } />
                            </Dropdown>
                        </div>
                    </div>

                    <figure className="highlight">
                        <pre>
                            <code className="language-html" data-lang="html">
                                {this.state.text}
                            </code>
                        </pre>
                    </figure>

                </div>
            </div>
        );
    }

}