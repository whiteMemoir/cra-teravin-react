import "./App.css";
import AppRoutes from "./AppRoutes";
import { FormProvider } from "./context/FormContext";

function App() {
	return (
		<FormProvider>
			<div className="App">
				<AppRoutes />
			</div>
		</FormProvider>
	);
}

export default App;
