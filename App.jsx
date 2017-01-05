import React from 'react';
import Button, {TypeColors} from "./components/Button.jsx";
import TextBoxFor from "./components/TextBoxFor.jsx";

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

                <br />

                <TextBoxFor placeholder="Nome" name={'Nome'} value={this.state.nome} onChange={(value) => {this.setState({nome: value})}} inline={true}/>
                <TextBoxFor label="Id" placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => {this.setState({id: value})}} inline={true}/>
                <TextBoxFor label="Id" placeholder="Id" name={'Id'} value={this.state.id} onChange={(value) => {this.setState({id: value})}} inline={true} disabled={true}/>

            </div>
        );
    }
}

export default App;