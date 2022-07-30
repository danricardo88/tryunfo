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
    deckCards: [],
  }

  // espaço reservado a functions:
  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    this.setState((prevState) => ({ deckCards: [{ ...prevState }.deckCards, {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    }],
    }), () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: '',
      hasTrunfo: '',
      isSaveButtonDisabled: true,
    }), () => this.setState({
      hasTrunfo: cardTrunfo,
    }));
  };

  checandoTrunfo = () => {
    const { deckCards } = this.state;
    if (deckCards) {
      return deckCards.some((card) => card.cardTrunfo);
    }
    return false;
  }
  //
  // //checando = () => {
  //   const { cardTrunfo } = this.state;
  //   if (cardTrunfo !== false) {
  //     this.setState({
  //       hasTrunfo: true,
  //     });
  //   }
  // }

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

  botaoQueSalvaDeck = () => {
    const { state } = this;
    const { deckCards } = state;
    this.setState({ ...state, deckCards: [...deckCards, state] }, () => {
      this.checandoTrunfo();
    });
  }

  deletaCard = (i) => {
    const { deckCards } = this.state;
    const deck = deckCards.map((add) => add.cardName !== i);
    this.setState({
      deckCards: deck,
    }, () => {
      this.checandoTrunfo();
    });
  }

  // deletaCard = (newCard, trunfo) => {
  //   const { deckCards } = this.state;
  //   const cartas = deckCards.filter((_card, index) => newCard !== index);
  //   this.setState({
  //     deckCards: cartas,
  //     hasTrunfo: !trunfo,
  //   });
  // }

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
      // hasTrunfo,
      isSaveButtonDisabled,
      deckCards,
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
          hasTrunfo={ this.checandoTrunfo() }
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
        { deckCards.map((add) => (
          <div key={ add.cardName }>
            <Card
              cardName={ add.cardName }
              cardDescription={ add.cardDescription }
              cardAttr1={ add.cardAttr1 }
              cardAttr2={ add.cardAttr2 }
              cardAttr3={ add.cardAttr3 }
              cardImage={ add.cardImage }
              cardRare={ add.cardRare }
              cardTrunfo={ add.cardTrunfo }
            />
            <button
              type="button"
              onClick={ () => this.deletaCard(add.cardName) }
              data-testid="delete-button"
            >
              Excluir

            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
