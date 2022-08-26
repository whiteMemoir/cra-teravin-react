import { Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Forms from "./pages/Forms";
import Home from "./pages/Home";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/add-data" element={<Forms />} />
			<Route path="/detail/:id" element={<Detail />} />
		</Routes>
	);
};

export default AppRoutes;
