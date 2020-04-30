import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

class SpaceX extends React.Component{
    state = {
        rockets: [],
        rocketClicada: [],
        mudarTela: false
      }
    
      componentDidMount = () => {
        this.mostrarRockets()
      }
    
      mostrarRockets = () => {
        Axios
        .get('https://api.spacexdata.com/v3/rockets')
        .then(response => {
          this.setState({
            rockets: response.data
          })
        })
        .catch(error => {
          window.alert(error)
        })
      }
    
      onClickRocket = (id) => {
        Axios
        .get(`https://api.spacexdata.com/v3/rockets/${id}`)
        .then(response => {
          this.setState({
            rocketClicada: response.data,
            mudarTela: !this.state.mudarTela
          })
        })
        .catch(error => {
          window.alert(error)
        })
      }
    
      voltar = () => {
        this.setState({
          mudarTela: !this.state.mudarTela
        })
      }

      render() {
        const mudarTela = this.state.mudarTela
        if (!mudarTela){
          return (
            <div className="App">
              {this.state.rockets.map((rocket) => {
                return (
                  <div key={rocket.rocket_name}>
                    <p><strong>Foguete: </strong>{rocket.rocket_name}<button onClick={() => this.onClickRocket(rocket.rocket_id)}>Ler mais</button></p>
                  </div>
                )
              })}
              <button onClick={this.props.paginaInicial}>Voltar</button>
            </div>
          );
        }
        return(
          <div className="App">
            <p><strong>Foguete: </strong>{this.state.rocketClicada.rocket_name}</p>
            <p><strong>País: </strong>{this.state.rocketClicada.country}</p>
            <p><strong>Primeiro vôo: </strong>{this.state.rocketClicada.first_flight}</p>
            <p><strong>Companhia: </strong>{this.state.rocketClicada.company}</p>
            <p><strong>Largura: </strong>{this.state.rocketClicada.height.meters} metros</p>
            <p><strong>Diâmetro: </strong>{this.state.rocketClicada.diameter.meters} metros</p>
            <p><strong>Peso: </strong>{this.state.rocketClicada.mass.kg} kg</p>
            <p><strong>Descrição: </strong>{this.state.rocketClicada.description}</p>
            <p><a href={this.state.rocketClicada.wikipedia} target={"_blank"}>Ler mais</a></p>
            <button onClick={this.voltar}>Voltar</button>
          </div>
        )
      }
}

export default SpaceX