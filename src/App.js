import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  // constructor() {
  //   super();
  // }
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    saveButton: true,
  }

  // espaço reservado a functions:
  onSaveButtonClick = (e) => {
    e.preventDefault();
  }

  onInputChange = ({ target }) => { // <-- PAREI AQUI ! INFERNO DE LINT
    // this.setState({[target.cardName]: target.value});
    // if (targe.cardName === 'check') {
    //   this.setState({[target.cardName]: target.check,
    //   })
    // };
    const { name } = target;
    const testando = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: testando,
    });
  }

  // fim do espaço reservado a functions

  render() {
    // Espaço para descontrução.
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      saveButton,
    } = this.state;

    // Fim do espaço para descontrução.

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ saveButton }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
