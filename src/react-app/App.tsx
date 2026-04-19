// src/App.tsx
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";

function App() {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
