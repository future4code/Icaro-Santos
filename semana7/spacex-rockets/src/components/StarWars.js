import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'

class StarWars extends React.Component{
    state = {
        starships: []
    }

    componentDidMount = () => {
        Axios
        .get('http://swapi.dev/api/starships')
        .then(response => {
            this.setState({
                starships: response.data.results
            })
        })
        .catch(error => {
            window.alert(error)
        })

    }
    render(){
        return(
            <div className="App">
                {this.state.starships.map((starship) => {
                    return(
                        <div key={starship.name}>
                            <p><strong>Nome: </strong>{starship.name}</p>
                        </div>
                    )
                })}
                <button onClick={this.props.paginaInicial}>Voltar</button>
            </div>
        )
    }
}
export default StarWars