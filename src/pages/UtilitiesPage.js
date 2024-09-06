import React from "react";
import { Box, Typography } from "@mui/material";

function UtilitiesPage() {
	return (
		<Box
			sx={{
				height: "100vh",
				padding: "20px",
				textAlign: "center",
				color: "#fff", // Make text white to contrast with the background
			}}>
			<Typography variant="h4">Utilities Page</Typography>
		</Box>
	);
}

export default UtilitiesPage;
