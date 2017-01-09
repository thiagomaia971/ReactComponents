import React from 'react';
import Button, {TypeColors} from "./components/Button.jsx";
import TextBoxFor from "./components/TextBoxFor.jsx";
import Dropdown from "./components/Dropdown.jsx";
import DropdownItem from "./components/DropdownItem.jsx";
import NavTab from "./components/NavTab.jsx";
import NavItem from "./components/NavItem.jsx";
import NavContainer from "./components/NavContainer.jsx";

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nome: '',
            id: 0
        };
    }

    render() {


        return (
            <div>

                <Button text={'Button - Default'} color={TypeColors.DEFAULT} />
                <Button text={'Button - Success'} color={TypeColors.SUCCESS} />
                <Button text={'Button - Info'} color={TypeColors.INFO} />
                <Button text={'Button - Warning'} color={TypeColors.WARNING} />
                <Button text={'Button - Danger'} color={TypeColors.DANGER} />
                <Button text={'Button - Pmenos'} color={TypeColors.PMENOS} />

                <br />

                <Dropdown label="Action" btnColor={TypeColors.DEFAULT} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <Dropdown label="Action" btnColor={TypeColors.SUCCESS} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <Dropdown label="Action" btnColor={TypeColors.INFO} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <Dropdown label="Action" btnColor={TypeColors.WARNING} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <Dropdown label="Action" btnColor={TypeColors.DANGER} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <Dropdown label="Action" btnColor={TypeColors.PMENOS} inline={true}>
                    <DropdownItem label="A" onClick={() => {console.log("a")}} />
                    <DropdownItem label="B" onClick={() => {console.log("b")}} />
                    <DropdownItem label="C" onClick={() => {console.log("c")}} />
                    <DropdownItem label="D" onClick={() => {console.log("d")}} />
                </Dropdown>

                <br />

                <TextBoxFor placeholder="Nome" name={'Nome'} value={this.state.nome} onChange={(value) => {this.setState({nome: value})}} inline={true} leftLabel="@" />
                <TextBoxFor placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => {this.setState({id: value})}} inline={true} width="300px" leftLabel="R$" rightLabel="@" />
                <TextBoxFor label="Id" placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => {this.setState({id: value})}} inline={true} disabled={true}/>

                <br />

                <NavTab>
                    <NavItem i={0} label="Home"  >
                        <div>
                            Home é nois
                        </div>
                    </NavItem>
                    
                    <NavItem i={1} label="Cliente" >
                        <div>
                            Cliente é nois
                        </div>
                    </NavItem>
                </NavTab>

            </div>
        );
    }
}

export default App;