import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";

export default function Faqs() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	return (
		<Box>
			<Accordion
				expanded={expanded}
				onChange={handleExpansion}
				slots={{ transition: Fade }}
				slotProps={{ transition: { timeout: 400 } }}
				sx={{
					"& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
					"& .MuiAccordionDetails-root": {
						display: expanded ? "block" : "none"
					}
				}}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1-content"
					id="panel1-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						Lorem Ipsum Dolor Sit Amet
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>NewSMS is one of the biggest tools provided by Lorem Ipsum</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2-content"
					id="panel2-header"
				>
					<Typography variant="body1" sx={{ fontWeight: 700 }}>
						Is NewSMS free?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Yes you can get NewSMS app for free{" "}
						<span style={{ color: "skyblue" }}>
							{" "}
							<a href="/download" target="_blank">
								download here
							</a>
						</span>
						, even our code base is open source
					</Typography>
				</AccordionDetails>
			</Accordion>
			{/*  */}
		</Box>
	);
}
