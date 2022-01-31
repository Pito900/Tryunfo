import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
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

    return (
      <div>
        <input
          type="text"
          name="cardName"
          value={ cardName }
          data-testid="name-input"
          onChange={ onInputChange }
        />
        <textarea
          name="cardDescription"
          value={ cardDescription }
          data-testid="description-input"
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAttr1"
          max="90"
          value={ cardAttr1 }
          data-testid="attr1-input"
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAttr2"
          max="90"
          value={ cardAttr2 }
          data-testid="attr2-input"
          onChange={ onInputChange }
        />
        <input
          type="number"
          name="cardAttr3"
          max="90"
          value={ cardAttr3 }
          data-testid="attr3-input"
          onChange={ onInputChange }
        />
        <input
          type="text"
          name="cardImage"
          value={ cardImage }
          data-testid="image-input"
          onChange={ onInputChange }
        />
        <select
          name="cardRare"
          value={ cardRare }
          data-testid="rare-input"
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          data-testid="trunfo-input"
          onChange={ onInputChange }
        />}
        <button
          type="button"
          name=""
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
