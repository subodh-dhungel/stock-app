import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

const ScripAccordion = (props) => {
  let data = props.data

  const deleteStock = () =>{
    props.onDelete(props.index);
  }

  return (
    <>
      <Accordion
        sx={{
          marginTop: '20px'
        }}
      >
        <Box sx={{ display: "flex" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ flexGrow: 1 }}
          >
            <Typography>{data[props.index].script}</Typography>
          </AccordionSummary>
          <Box>
            <IconButton onClick={deleteStock}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
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

          <Typography>
            Total Loss: {data[props.index].buyPrice - data[props.index].currentPrice}
          </Typography>

        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ScripAccordion;
