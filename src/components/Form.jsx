import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  // constructor() {
  //   super();
  // }

  // espaço reservado a functions

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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    // Fim do espaço para descontrução.

    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <br />
        <fieldset>
          <label htmlFor="name-input">
            Nome:
            <input
              value={ cardName }
              name="cardName"
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              placeholder="Insira o nome da carta"
            />
          </label>

          <label htmlFor="description-input">
            Descrição:
            <textarea
              value={ cardDescription }
              name="cardDescription"
              onChange={ onInputChange }
              type="text"
              minLength="5"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            <input
              value={ cardAttr1 }
              name="cardAttr1"
              onChange={ onInputChange }
              type="number"
              min="0"
              max="90"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              value={ cardAttr2 }
              name="cardAttr2"
              onChange={ onInputChange }
              type="number"
              min="0"
              max="90"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              value={ cardAttr3 }
              name="cardAttr3"
              onChange={ onInputChange }
              type="number"
              min="0"
              max="90"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            Img:
            <input
              value={ cardImage }
              name="cardImage"
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare-input">
            <select
              value={ cardRare }
              name="cardRare"
              onChange={ onInputChange }
              type="text"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          {hasTrunfo ? (<h2>Você já tem um Super Trunfo em seu baralho</h2>) : (
            <label htmlFor="checkbox">
              <input
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
                type="checkbox"
                data-testid="trunfo-input"
              />
              Super Trunfo
            </label>)}
          <button
            name="isSaveButtonDisabled"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </fieldset>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
