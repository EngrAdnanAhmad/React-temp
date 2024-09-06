import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Box, Toolbar } from "@mui/material";
import Sidebar from "./components/Sidebar";
import SearchPage from "./pages/SearchPage";
import DSQsPage from "./pages/DSQsPage";
import UtilitiesPage from "./pages/UtilitiesPage";
import StatusPage from "./pages/StatusPage";

function App() {
	return (
		<Router>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<Sidebar />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						height: "100vh",
						backgroundImage:
							"linear-gradient(to right, rgb(58 158 237), rgb(168 232 247))",
						p: 2,
					}}>
					<Toolbar />
					<Routes>
						<Route path="/search" element={<SearchPage />} />
						<Route path="/dsqs" element={<DSQsPage />} />
						<Route path="/utilities" element={<UtilitiesPage />} />
						<Route path="/status" element={<StatusPage />} />
					</Routes>
				</Box>
			</Box>
		</Router>
	);
}

export default App;
