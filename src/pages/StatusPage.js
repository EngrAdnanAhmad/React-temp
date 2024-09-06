import React from "react";
import { Box, Typography } from "@mui/material";

function StatusPage() {
	return (
		<Box
			sx={{
				height: "100vh",
				padding: "20px",
				textAlign: "center",
				color: "#fff", // Make text white to contrast with the background
			}}>
			<Typography variant="h4">Status Page</Typography>
		</Box>
	);
}

export default StatusPage;
