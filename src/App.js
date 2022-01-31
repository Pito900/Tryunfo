import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardList: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveValidation = this.saveBuValidation.bind(this);
    this.saveCardBt = this.saveCardBt.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: (target.type === 'checkbox') ? target.checked : target.value,
    }, () => this.setState({ isSaveButtonDisabled: this.saveBuValidation() })); // Vi o tópico, no slack, do [Eduardo Souza]!
  }

  saveBuValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const str = [cardName, cardDescription, cardImage, cardRare];
    const atr123 = [cardAttr1, cardAttr2, cardAttr3];
    const validaStr = (vetor) => vetor.every((item) => item !== '');
    const validaAtr = (vetor) => {
      const atrMax = 90;
      return vetor.every((item) => Number(item) <= atrMax && Number(item) >= 0);
    };
    const validaSumAtr = (vetor) => {
      const sumAtrMax = 210;
      const sumAtr = vetor.reduce((acc, atr) => Number(acc) + Number(atr), 0);
      if (sumAtr <= sumAtrMax) {
        return true;
      }
      return false;
    };
    const vStr = validaStr(str);
    const vAtr = validaAtr(atr123);
    const vSum = validaSumAtr(atr123);
    const vOrF = [vStr, vAtr, vSum];
    const quale = vOrF.every((item) => item === true);
    return !quale;
  }

  saveCardBt() {
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
    } = this.state;
    const cardInfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState(({ cardList }) => ({ cardList: [...cardList, cardInfo] }),
      () => this.setState({ cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        isSaveButtonDisabled: true,
      }));
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.saveCardBt }
        />

        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
