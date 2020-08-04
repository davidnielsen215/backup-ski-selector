import React, { Component } from 'react'
import Axios from 'axios'
import SkiResult from './SkiResult'


export default class Result extends Component {
    state = {
        skiResults :{
            result1: undefined,
            result2: undefined,
            result3: undefined,
            result4: undefined,
            result5: undefined
        },
        inputValues: {
            terrain: {
                p: 'p',
                m: 'm',
                t: 't',
                g: undefined,
                b: undefined
            },
            gender: 'f',
            skillLevel: {
                b: undefined,
                i: 'i',
                a: undefined,
                e: 'e'

            },
            speed: {
                f: undefined,
                m: 'm',
                s: 's'
            },
            turnRadius: {
                s: 's',
                m: 'm',
                l: undefined
            },
            snow:{
                g: 'g',
                p: 'p',
                a: undefined
            },
            // terrain: this.props.values.terrain,
            // gender: this.props.values.gender,
            // skillLevel: this.props.values.skillLevel,
            // speed: this.props.values.speed,
            // turnRadius: this.props.values.turnRadius,
            // snow: this.props.values.snow,
        },
        isEmpty: false,
    }

    retrieveSki = () => {
        Axios.post('http://localhost:5000/skis/find', this.state.inputValues).then(res => {  
            
            if(res.data[0] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result1: res.data[0].name
                    }
                })
            }
            if(res.data[1] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result2: res.data[1].name
                    }
                })
            }
            if(res.data[2] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result3: res.data[2].name
                    }
                })
            }
            if(res.data[3] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result4: res.data[3].name
                    }
                })
            }
            if(res.data[4] !== undefined){
                this.setState({
                    skiResults: {
                        ...this.state.skiResults,
                        result5: res.data[4].name
                    }
                })
            }   
            })
        .catch(err => (console.log(err)))
    }
 
    

    componentDidMount() {
            this.retrieveSki()     
    }
    
    restart = (e) => {
        e.preventDefault()
        this.props.restart()
    }
    
    render() {
        let skis = this.state.skiResults
        let skis1 = this.state.skiResults.result1
        let skis2 = this.state.skiResults.result2
        let skis3 = this.state.skiResults.result3
        let skis4 = this.state.skiResults.result4
        let skis5 = this.state.skiResults.result5



        return(
        <div style={styles.background}>
            <div>
            <h1 style={styles.textColor}>Recommended Skis</h1>
            <br/>
                {/* {emptiness} */}
            <br/>
            <div style={styles.cardContainer}>
            {Object.keys(skis).map(function(item, i){
                if(skis[item] !== undefined){
                    return <SkiResult key={i} skis={skis} item={item} cardStyle={styles.card}/>
                }
                
            })}
            </div >
            
            </div>
            <button onClick={this.retrieveSki} style={styles.previousButton}>retrieve</button>
            <button onClick={this.restart} style={styles.restartButton}>restart</button>
        </div>
        )
    }
    }

const styles = {
    restartButton: {
        color: 'white',
        minWidth: '15vw',
        minHeight: '5%',
        backgroundColor: 'rgba(63,84,184,1)',
        // font-family: 'Roboto', sans-serif;;
        fontSize: '25px',
        borderRadius: '10px',
        margin: '2vh',
        padding: '3px',
        cursor: 'pointer'
    },
    cardContainer: {
        display: 'flex',
        overflow: 'scroll',
        maxWidth: '85vw',
        marginLeft: '7vw',
        // flex: 'row',
        border: '1px solid red'
    },
    card: {
        minWidth: '23vw',
        maxWidth: '30vw',
        maxHeight: '35vh',
        margin: '2vh'
        // margin: '35px',
        // minWidth: '315px',
    },
    textColor: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15px',
        fontSize: '22px'
    },
    background: {
        minHeight: '100vh',
        maxHeight: '170vh',
        background: 'black'
    },
    previousButton: {
        color: 'white',
        minWidth: '15vw',
        minHeight: '5%',
        backgroundColor: '#9e2232',
        // font-family: 'Roboto', sans-serif;;
        fontSize: '25px',
        borderRadius: '10px',
        margin: '2vh',
        padding: '3px',
        cursor: 'pointer'
    }
}

