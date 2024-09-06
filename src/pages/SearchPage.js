import React, { useState } from "react";
import {
	TextField,
	Button,
	Box,
	Card,
	CardContent,
	Typography,
	Grid,
} from "@mui/material";

const SearchPage = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSearch(); // Trigger search when the "Enter" key is pressed
		}
	};
	const handleSearch = () => {
		const results = [
			{ id: 1, title: "Result 1", description: "This is the first result." },
			{ id: 2, title: "Result 2", description: "This is the second result." },
			{ id: 3, title: "Result 3", description: "This is the third result." },
			{ id: 4, title: "Result 4", description: "This is the first result." },
			{ id: 5, title: "Result 5", description: "This is the second result." },
			{ id: 6, title: "Result 6", description: "This is the third result." },
			{ id: 16, title: "Result 6", description: "This is the third result." },
			{ id: 61, title: "Result 6", description: "This is the third result." },
			{ id: 7, title: "Result 7", description: "This is the third result." },
			{ id: 8, title: "Result 8", description: "This is the first result." },
			{ id: 9, title: "Result 9", description: "This is the second result." },
			{ id: 91, title: "Result 9", description: "This is the second result." },
			{ id: 10, title: "Result 10", description: "This is the third result." },
		];

		setSearchResults(
			results.filter((result) =>
				result.title.toLowerCase().includes(searchTerm.toLowerCase()),
			),
		);
	};

	return (
		<Box
			sx={{
				height: "90vh",
				padding: "20px",
				textAlign: "center",
				color: "#fff", // Make text white to contrast with the background
			}}>
			{/* Search Field */}
			<Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
				<TextField
					label="Search"
					variant="outlined"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onKeyPress={handleKeyPress}
					sx={{
						width: "500px",
						mr: 2,
						borderRadius: "8px",
						backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSearch}
					sx={{
						height: "55px",
						borderRadius: "8px",
						backgroundColor: "#2196f3",
						"&:hover": {
							backgroundColor: "#1976d2",
						},
					}}>
					Search
				</Button>
			</Box>

			{/* Search Results */}
			{searchResults.length > 0 && (
				<Grid
					className="custom-scrollbar"
					container
					spacing={3}
					paddingRight={2}
					paddingLeft={2}
					justifyContent="start"
					marginBottom={3}
					sx={{ height: "80vh", overflowY: "scroll", overflowX: "hidden" }}>
					{searchResults.map((result) => (
						<Grid item xs={12} sm={12} md={6} lg={6} key={result.id}>
							<Card
								sx={{
									backgroundColor: "rgba(255, 255, 255, 0.9)",
									boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
									transition: "transform 0.3s ease, box-shadow 0.3s ease",
									"&:hover": {
										transform: "scale(1.05)",
										boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
									},
								}}>
								<CardContent>
									<Typography variant="h6" gutterBottom>
										{result.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{result.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			)}

			{/* No results */}
			{searchResults.length === 0 && searchTerm && (
				<Typography variant="body1" sx={{ mt: 4 }}>
					No results found.
				</Typography>
			)}
		</Box>
	);
};

export default SearchPage;
