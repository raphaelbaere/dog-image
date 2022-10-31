import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.fetchDogImage();
  }

  state = {
    isLoading: true,
    imageUrl: '',
  };

  componentDidMount() {
  }

  shouldComponentUpdate(/* nextProps, nextState */) {
    // Implemente sua lógica aqui
    return true;
  }

  componentDidUpdate() {
    // Implemente sua lógica aqui
  }

  fetchDogImage = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const dogUrl = data.message;
    this.setState({ isLoading: false, imageUrl: dogUrl });
  };

  render() {
    const { isLoading, imageUrl } = this.state;
    return (
      <div>
        { isLoading ? <p>Loading...</p> : (
          <div>
            <img src={ imageUrl } alt="Doguinho aleatório" />
            <button
              type="button"
              onClick={ this.fetchDogImage }
            >
              Novo doguinho!
            </button>
          </div>) }
      </div>
    );
  }
}

export default App;
