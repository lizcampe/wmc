import React, {Component } from 'react';
import Item from './Item/Item';
import Button from'react-bootstrap/Button';
import CreateItem from './CreateItem/CreateItem';
import { getData } from '../../utils/api';



class List extends Component{
	constructor(props) {
	super(props);
	this.state={
	lastClicked: null,
	creating:false,
	items:[],
	}
	this.changeLastClicked=this.changeLastClicked.bind(this);
	this.createItem =this.createItem.bind(this);
	this.closeModal= this.closeModal.bind(this);
	this.updateList=this.updateList.bind(this);

	}

 changeLastClicked(id) {
 this.setState({lastClicked: id});
 }

 updateList(){
	 getData('items').then((items)=>this.setState({items}));
 }

createItem(){
	this.setState({creating:true});
}

closeModal(){
	this.setState({creating:false});
	this.updateList();
}

	renderItems(){
	return this.state.items.map((item,i)=>
	(<Item 
		key={`item-${i}`}
	lastClicked= {this.state.lastClicked}
	changeLastClicked= {this.changeLastClicked}
	updateList={this.updateList}
	{...item} />
	));
	}



componentDidMount(){
	this.updateList();
}

render(){
	return (
		<>
		<CreateItem show= {this.state.creating} hide= {this.closeModal}/>
		<Button variant= "primary" onClick={this.createItem}>Add new Item</Button>
		<table className="list">
		<thead>
		<tr>
			<th>Id </th>
			<th>Name</th>
			<th>Description</th>
			<th>Value</th>
			<th>Clicked</th>
		</tr>
		</thead>

		<tbody>
		{this.renderItems()}
		</tbody>
		</table>
		</>
	);
 }
}

export default List;