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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    // Fim do espaço para descontrução.

    return (
      <form action="">
        <h1>Adicionar nova carta</h1>
        <br />
        <div>
          <label htmlFor="name-input">
            <input
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              name="name-input"
              data-testid="name-input"
              placeholder="Insira o nome da carta"
            />
          </label>

          <label htmlFor="description-input">
            <textarea
              value={ cardDescription }
              onChange={ onInputChange }
              name="description-input"
              type="text"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1-input">
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="attr1-input"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="attr2-input">
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="attr2-input"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="attr3-input">
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="attr3-input"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image-input">
            <input
              value={ cardImage }
              onChange={ onInputChange }
              name="image-input"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare-input">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="rare-input"
              type="text"
              data-testid="rare-input"
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            <input
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
            />
          </label>
          <br />
          <button
            name="save-button"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </div>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.----.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
