import React from 'react';
import Button from "@mui/material/Button";
import UserCardlist from './UserCardlist';

class App extends React.Component{
	state = {
		loading: true,
		employee: []
	}
	async componentDidMount(){
		const url = "https://jsonplaceholder.typicode.com/users";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({
			loading: false,
			employee: data
		})
		// console.log('STATE',this.state);
	}
	render(){
		return (
			<div className="App">
				<h1>Project Setup</h1>
				<Button variant="contained">Hello World</Button>

				<UserCardlist state={this.state}/>
			</div>
		  );
	}
  
}

export default App;
