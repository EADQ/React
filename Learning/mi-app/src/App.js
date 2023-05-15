import { Component } from "react"

//class Button extends Component {
  //state = {}
  //constructor(props){
    //super(props)
    //console.log('constructor', props);
  //}

  //componentDidMount(){
    //console.log('componentDidMount');
  //}

  //componentDidUpdate(prevProps, prevState){
   //console.log('componentDidUpdate', prevProps, prevState);
  //}

  //componentWillUnmount(){
    //console.log('desmontando componente', this.props, this.state);
  //}

  //render(){
    //console.log('ejecutando metodo render de button')
    //return(
      //<button onClick={() => this.setState({prop: 1})}>
        //Enviar
      //</button>
    //)
  //}
//}


//class App extends Component {
  //state = {
    //valor:3
  //}
  //render(){
    //console.log(this.state);
    //return(
      //<div>
        //<p>Hola Mundo</p>
        //{this.state.valor ===3
          //? <Button chanchito='feliz'/>
          //: null}
        //<button 
          //className={'${this.state.valor}'}
          //onClick={() => this.setState({valor:2})}>
          //Enviar en App
        //</button>
      //</div>
    //)
  //}
//}

class Input extends Component {


  //Propiedad que le agregamos un funct arrow function
  handleChange = (value) => {
    this.setState({valor:value})
  }

  render(){
    return(
     <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}


class App extends Component{
  state = {
    nombre: '',
    apellido: '',
  }
  //Metodo que me actualiza el estado de mis valores
  updateValues = (prop, value) => {
    //Aplicamos una propiedad dinamica []
    this.setState({ [prop]: value })
  }
  render(){
    return(
      <p>
        {/*Usamos temple String para poder probar las propiedades (usamos acento grave las que estan en esc)*/} 
        Nombre Completo: {`${this.state.nombre} ${this.state.apellido}`} 
        <Input 
          value={this.state.nombre}
          onChange={e => this.updateValues('nombre', e.target.value)}
        />
        <Input 
          value={this.state.apellido}
          onChange={e => this.updateValues('apellido', e.target.value)}
        />
      </p>
    )
  }
}

export default App


