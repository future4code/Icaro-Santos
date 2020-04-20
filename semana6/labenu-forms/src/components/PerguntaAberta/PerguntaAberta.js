import React from 'react'
import styled from 'styled-components'

const DivForms = styled.div`
    width: 50vw;
    margin: auto;
`

const Inputs = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`

export class PerguntaAberta extends React.Component{
    render(){
        return(
            <div>
                <Inputs placeholder={this.props.perguntas} value={this.props.value} onChange={this.props.onChange}></Inputs>

            </div>
        )
    }
}

export default PerguntaAberta