// src/App.tsx
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
		</Routes>
	);
}

export default App;
