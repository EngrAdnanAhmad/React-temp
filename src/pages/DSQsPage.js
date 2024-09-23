import React, { useState } from "react";
import {
	TextField,
	Button,
	Box,
	Card,
	CardContent,
	Typography,
	Grid,
	IconButton,
	Modal,
	Fade,
	Backdrop,
	InputBase,
	Paper,
	List,
	ListItem,
	ListItemText,
	Link,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";

const DSQPage = () => {
	const [queries, setQueries] = useState([
		{ id: 1, name: "Query 1", query: "SELECT * FROM table1;", result: null },
		{ id: 2, name: "Query 2", query: "SELECT * FROM table2;", result: null },
		{ id: 3, name: "Query 3", query: "SELECT * FROM table3;", result: null },
	]);

	const [currentEdit, setCurrentEdit] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [results, setResults] = useState({});
	const [activeResult, setActiveResult] = useState(null); // To track which query's result is active
	const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering queries

	// Dummy API request (simulating different response formats)
	const runQuery = (queryId) => {
		const query = queries.find((q) => q.id === queryId);

		// Simulate different response types
		setTimeout(() => {
			let mockResponse;
			if (queryId === 1) {
				mockResponse = {
					success: true,
					data: {
						type: "urlList",
						data: [
							"http://www.lorenispum.com/somedummyurls",
							"http://www.lorenispumtex.com/somedummyurlsfortesting",
							"http://www.urloflorenispum.com/urlofsomedummyurls",
						],
					},
				};
			} else if (queryId === 2) {
				mockResponse = {
					success: true,
					data: {
						type: "keywordTable",
						data: [
							{ keyWordBEValue: "Screening", totalDatasets: 4 },
							{ keyWordBEValue: "Data Model", totalDatasets: 3 },
							{ keyWordBEValue: "System", totalDatasets: 3 },
						],
					},
				};
			} else if (queryId === 3) {
				mockResponse = {
					success: true,
					data: {
						message: `Plain text result for ${query.name}`,
						type: "text",
					},
				};
			}

			setResults((prevResults) => ({
				[queryId]: mockResponse.data,
			}));
			setActiveResult(queryId); // Show the result on the right side
		}, 1000);
	};

	const handleEdit = (queryId) => {
		const queryToEdit = queries.find((q) => q.id === queryId);
		setCurrentEdit(queryToEdit);
		setIsModalOpen(true);
	};

	const saveQuery = () => {
		const updatedQueries = queries.map((q) =>
			q.id === currentEdit.id ? { ...q, query: currentEdit.query } : q,
		);
		setQueries(updatedQueries);
		setIsModalOpen(false);
	};

	// Filter queries based on search term
	const filteredQueries = queries.filter((query) =>
		query.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	// Render different types of results
	const renderResult = (result) => {
		if (!result || !result.type) return <Typography>No results available</Typography>;

		if (result.type === "urlList") {
			return (
				<List>
					{result.data.map((url, index) => (
						<ListItem key={index}>
							<Link href={url} target="_blank" rel="noopener">
								<ListItemText primary={url} />
							</Link>
						</ListItem>
					))}
				</List>
			);
		} else if (result.type === "keywordTable") {
			return (
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Keyword</TableCell>
								<TableCell>Total Datasets</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{result.data.map((row, index) => (
								<TableRow key={index}>
									<TableCell>{row.keyWordBEValue}</TableCell>
									<TableCell>{row.totalDatasets}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			);
		} else if (result.type === "text") {
			return <Typography>{result.message}</Typography>;
		}

		return null;
	};

	return (
		<Box sx={{ padding: "20px" }}>
			<Grid container spacing={3}>
				{/* Query List and Search Filter */}
				<Grid item xs={12} sm={4}>
					<Typography variant="h5" sx={{ mb: 2 }}>
						Search DSQs
					</Typography>
					<Paper
						sx={{
							marginRight:"7px",
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							marginBottom: "10px",
						}}>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Search Queries"
							inputProps={{ "aria-label": "search queries" }}
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</Paper>
					<Box sx={{ height: "75vh", overflowY: "auto", pr: 1 }}>
						{filteredQueries.map((query) => (
							<Card
								key={query.id}
								sx={{
									marginBottom: "10px",
									position: "relative",
									paddingRight: "60px", // Ensures space for the icons
								}}>
								<CardContent>
									<Typography variant="h6">{query.name}</Typography>
									<Typography variant="body2" color="text.secondary">
										{query.query}
									</Typography>
									<Box sx={{ position: "absolute", top: "8px", right: "8px" }}>
										<IconButton
											onClick={() => handleEdit(query.id)}
											size="small">
											<EditIcon />
										</IconButton>
										<IconButton onClick={() => runQuery(query.id)}>
											<PlayArrowIcon />
										</IconButton>
									</Box>
								</CardContent>
							</Card>
						))}
					</Box>
				</Grid>

				{/* Query Editor Modal */}
				<Modal
					open={isModalOpen}
					onClose={handleCloseModal}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
						sx: { backgroundColor: "rgba(0, 0, 0, 0.8)" }, // Dark backdrop
					}}>
					<Fade in={isModalOpen}>
						<Box
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								width: "600px",
								bgcolor: "background.paper",
								boxShadow: 24,
								borderRadius: 3, // Rounded corners
								p: 4,
								outline: "none", // Remove default outline
							}}>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									mb: 2,
								}}>
								<Typography variant="h6" component="h2">
									Edit Query
								</Typography>
								<IconButton onClick={handleCloseModal}>
									<CloseIcon />
								</IconButton>
							</Box>
							<TextField
								fullWidth
								multiline
								rows={5}
								value={currentEdit?.query || ""}
								onChange={(e) =>
									setCurrentEdit({ ...currentEdit, query: e.target.value })
								}
								sx={{ marginBottom: 2 }}
							/>
							<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
								<Button
									onClick={handleCloseModal}
									variant="outlined"
									color="secondary">
									Close
								</Button>
								<Button onClick={saveQuery} variant="contained" color="primary">
									Save
								</Button>
							</Box>
						</Box>
					</Fade>
				</Modal>

				{/* Results Section */}
				<Grid item xs={12} sm={8}>
					<Typography variant="h6" sx={{ mb: 2 }}>
						Query Results
					</Typography>
					<Box sx={{ maxHeight: "80vh", overflowY: "auto" }}>
						{activeResult && (
							<Card sx={{ mb: 2 }}>
								<CardContent>
									{renderResult(results[activeResult])}
								</CardContent>
							</Card>
						)}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DSQPage;
