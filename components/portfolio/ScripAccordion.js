import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ScripAccordion = (props) => {
  let data = props.data

  return (
    <>
      <Accordion
        sx={{
          marginTop: '20px'
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Quantity of holdings: {data[props.index].kitta}
          </Typography>

          <Typography>
            Bought Price: NPR {data[props.index].buyPrice}
          </Typography>

          <Typography>
            Current Price: NPR {data[props.index].currentPrice}
          </Typography>

        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ScripAccordion;
