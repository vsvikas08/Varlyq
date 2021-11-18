import React from 'react';
import UserCardlist from './UserCardlist';
import Sidebar from './Sidebar';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


class App extends React.Component{
	state = {
		loading: true,
		employee: [],
		isHover: false,
		hoverIndex: -1
	}
	async componentDidMount(){
		const url = "https://jsonplaceholder.typicode.com/users";
		// const response = await fetch(url);
		// const data = await response.json();
		fetch(url).then((response) => {
			if (response.ok) {
			  return response.json();
			} else {
			  throw new Error('Something went wrong');
			}
		  })
		  .then((responseJson) => {
			// Do something with the response
			this.setState({
				loading: false,
				employee: responseJson,
				isHover: false,
				hoverIndex: -1
			})
		  })
		  .catch((error) => {
			console.log(error)
		  });
		// this.setState({
		// 	loading: false,
		// 	employee: data,
		// 	isHover: false,
		// 	hoverIndex: -1
		// })
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
	handleHoverIndex = (idx) => {
		this.setState({
			hoverIndex: idx
		})
		// console.log('hi ',this.hoverIndex);
	}

	render(){
		// console.log("Render");
		return (
			<Box sx={{flexGrow: 1}} style={{backgroundColor: '#00695c'}}>
				<Grid container sx={{minHeight: 730}}>
					<Grid item xs={12} md={2} lg={2}>
						<Sidebar 
							hovering={this.hovering}
							hoverIndex = {this.hoverIndex}
							handleHoverIndex={this.handleHoverIndex}
							/>
					</Grid>
					{ this.state.isHover && <Grid item md={10} lg={10}>
						<UserCardlist 
							state={this.state} 
							notHovering={this.notHovering} />
					</Grid>}
				</Grid>
			</Box>
		  );
	}
  
}

export default App;
