import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from './config'

function App() {
	const [count, setCount] = useState(0)
	const [movie, setMovie] = useState("")

	const url = 'https://moviesdatabase.p.rapidapi.com/titles/random';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': config.apiKey,
			'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
		}
	};

	const getRandomMovie = async () => {
		try {
			const response = await fetch(url, options);
			const result = await response.text();
			setMovie(result)
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getRandomMovie()
	}, [])

	console.log(import.meta.env.VITE_API_KEY, import.meta.env.VITE_API_HOST, import.meta.env.MODE)

	return (
		<>
			<h1>{movie} </h1>
			<div>
				<a href="https://vitejs.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
				</button>
				<p>
				Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
