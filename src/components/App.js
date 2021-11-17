import React from 'react';
import UserCardlist from './UserCardlist';
import Sidebar from './Sidebar';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


class App extends React.Component{
	state = {
		loading: true,
		employee: [],
		isHover: false
	}
	async componentDidMount(){
		const url = "https://jsonplaceholder.typicode.com/users";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({
			loading: false,
			employee: data,
			isHover: false
		})
		// console.log('STATE',this.state);
	}

	hovering = () => {
		// console.log("App hovering");
		this.setState({
			isHover: true
		})
		// console.log('is hover ',this.state.isHover);
	}
	notHovering = () => {
		// console.log("App not hovering");
		this.setState({
			isHover: false
		})
		// console.log('is hover',this.state.isHover);
	}

	render(){
		return (
			<Box sx={{flexGrow: 1}} style={{backgroundColor: '#009688'}}>
				<Grid container spacing={2} sx={{minHeight: 730}}>
					<Grid item xs={12} md={2} lg={2}>
						<Sidebar 
							hovering={this.hovering}
							/>
					</Grid>
					{ this.state.isHover && <Grid item md={10} lg={10}>
						<UserCardlist 
							state={this.state} 
							notHovering={this.notHovering}/>
					</Grid>}
				</Grid>
			</Box>
		  );
	}
  
}

export default App;
