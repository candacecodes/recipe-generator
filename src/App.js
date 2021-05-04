import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
	const APP_ID = "66cf2c01";
	const APP_KEY = "5b1319c4071d928d24ed1f524d56c9af";

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="App">
			<form>
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
