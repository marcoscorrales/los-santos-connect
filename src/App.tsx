
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";

export function App() {
	return (
		<div className="App">
			<header>
				<Header />
				<Navbar />
				<Slider />
			</header>
		</div>
	);
}
