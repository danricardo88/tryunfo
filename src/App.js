import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  }

  // espaço reservado a functions:
  onSaveButtonClick = (e) => {
    e.preventDefault();
  }

  validandoCamposVazios = (cardName, cardDescription, cardImage, cardRare) => (
    cardName && cardDescription && cardImage && cardRare)

  limitadorDeAtributos = (cardAttr1, cardAttr2, cardAttr3) => {
    const Attr1 = Number(cardAttr1);
    const Attr2 = Number(cardAttr2);
    const Attr3 = Number(cardAttr3);
    const Max = 90;
    const MaxTotal = 210;
    const Atks = Attr1 >= 0 && Attr1 <= Max && Attr2 >= 0
    && Attr2 <= Max && Attr3 >= 0 && Attr3 <= Max;
    const AtksSomados = Attr1 + Attr2 + Attr3 <= MaxTotal;

    return Atks && AtksSomados;
  }

  validandoBotao = () => {
    this.setState((prevState) => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = prevState;
      if
      (this.validandoCamposVazios(cardName, cardDescription, cardImage, cardRare)
      && this.limitadorDeAtributos(cardAttr1, cardAttr2, cardAttr3)) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const testando = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: testando,
    });
    this.validandoBotao();
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
      isSaveButtonDisabled,
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
