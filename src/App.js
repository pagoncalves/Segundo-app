import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: " ",
      msg: " ",
      status: "",
      n1: 0,
      n2: 0,
      media: 0.0,
      passo:0
      
    }
  }

  handleAperte = () => {
    this.setState((state) => ({     
    passo:1   }))
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleCalc = () => {
    this.setState((state) => ({ media: `Sua média é ${((parseFloat(state.n1) + parseFloat(state.n2)) / 2).toFixed(1)}`,
    passo:2 }))
    let media1 = (parseFloat(this.state.n1) + parseFloat(this.state.n2)) / 2;
    if (media1 >= 7) {
      this.setState((state) => ({ status: `Parabéns ${this.state.nome} você foi aprovado!` }))
    } else {
      this.setState((state) => ({ status: `${this.state.nome} você foi reprovado(a)!` }))  
    }
  }

  render() {

    return (
      <div className="App">
        <div className="TCard">
          {this.state.passo === 0 && <div className="Card">

            <h1>Olá!</h1>
            <h2>Digite seu nome:</h2>
            <p><input name="nome" value={this.state.nome} onChange={this.handleInput} ></input> </p>
            <p><button onClick={this.handleAperte}  >Aperte</button></p>

            <div className="RCard">Passo 1</div>
          </div>}


         {this.state.passo >= 1 && <div className="Card">
          <p>Seja bem vindo {this.state.nome}</p>
          <p>Insira suas notas: </p>
          <p>Nota 1:</p>
          <input name="n1" value={this.state.n1} onChange={this.handleInput}></input>
          <p>Nota 2:</p>
          <input name="n2" value={this.state.n2} onChange={this.handleInput}></input>
          <p> <button onClick={this.handleCalc}>Calcular média:</button></p>

          <div className="RCard">Passo 2 </div>

         </div>}

         {this.state.passo >= 2 && <div className="Card">
          <h3>Média</h3>
          <p>{this.state.media}</p>
          <p>{this.state.status}</p>

          <div className="RCard">Resultado</div>
         </div>}
         </div>
      </div>
      
    );
  }
}


export default App;