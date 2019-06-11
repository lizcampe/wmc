import React from 'react';

class Registro extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={
			nombre:"Liz",
			apellido: ""
		}
	}
}

export default Registro;
/*	
	actualizaNombre(event){
	let nombreIngresado = event.target.value;
	
		console.log(event);
	};

render() {


	return(
	<div>
     	<div> Nombre completo: <input placeholder= "Su nombre:" value= {this.state.nombre}
	     onChange= {(event)=> this.actualizaNombre(event)/></div>
	    <div> Email:<input placeholder= "Su correo:" value= {this.state.email}
	     onChange= {(event)=> this.actualizaEmail(event)/></div>
	<div> Apellido <input/> </div>

	</div>
	)
}
}

*/

