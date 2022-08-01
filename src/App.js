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

    this.setState((prevState) => {
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
      const carta = {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardTrunfo,
      };
      return {
        deckCards: [...prevState.deckCards, carta],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      };
    }, this.checandoTrunfo);
  };

  validandoCamposVazios = (cardName, cardDescription, cardImage, cardRare) => (
    cardName && cardDescription && cardImage && cardRare);

  limitadorDeAtributos = (cardAttr1, cardAttr2, cardAttr3) => { // <--- LIMITA O MÁXIMO DE ATRIBUTOS;
    const Attr1 = Number(cardAttr1);
    const Attr2 = Number(cardAttr2);
    const Attr3 = Number(cardAttr3);
    const Max = 90;
    const MaxTotal = 210;
    const Atks = Attr1 >= 0
    && Attr1 <= Max && Attr2 >= 0
    && Attr2 <= Max && Attr3 >= 0
    && Attr3 <= Max;
    const AtksSomados = Attr1 + Attr2 + Attr3 <= MaxTotal;
    return Atks && AtksSomados;
  }

  validandoBotao = () => {
  //   const fctValidandoCamposVazios = this.validandoCamposVazios();
  //   const ftclimitadorDeAtributos = this.limitadorDeAtributos();
  //   const valido = fctValidandoCamposVazios && ftclimitadorDeAtributos;
  //   // valido = false;
  //   this.setState({
  //     isSaveButtonDisabled: valido,
  //   });
  // }
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

  checandoTrunfo = () => {
    const { deckCards } = this.state;
    if (deckCards.some((card) => card.cardTrunfo)) {
      this.setState({ hasTrunfo: true });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  deletaCard = (cardDescription) => {
    const { deckCards } = this.state;
    const deck = deckCards.filter((add) => add.cardName !== cardDescription);
    this.setState({
      deckCards: deck,
    }, this.checandoTrunfo);
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
          hasTrunfo={ hasTrunfo } // <--- Pode ser aqui ? não sei se essa porra ta certa....
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
          <div key={ add.cardName + add.cardDescription }>
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
