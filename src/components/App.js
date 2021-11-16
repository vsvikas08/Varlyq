import React from 'react';
import UserCardlist from './UserCardlist';
import Sidebar from './Sidebar';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

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
			<Box sx={{flexGrow: 1}}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={2} lg={2}>
						<Sidebar />
					</Grid>
					<Grid item md={10} lg={10}>
						<UserCardlist state={this.state}/>
					</Grid>
				</Grid>
			</Box>
			// <div className="App">
				
			// 	<Sidebar />
			// 	<UserCardlist state={this.state}/>
			// </div>
		  );
	}
  
}

export default App;
