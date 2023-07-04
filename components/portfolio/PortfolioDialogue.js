import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FloatingActionButton from "./FloatingActionButton";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import addData from "@/firebase/Firestore";

export default function PortfolioDialogue() {
  const [open, setOpen] = React.useState(false);
  const [script, setScript] = React.useState("");
  const [kitta, setKitta] = React.useState(0);
  const [buyPrice, setBuyPrice] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(0);

  const handleSubmit = async (e) => {
    const data = {
      script: script,
      kitta: kitta,
      buyPrice: buyPrice,
      currentPrice: currentPrice
    };

    addData("Portfolio", script, data)
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FloatingActionButton click={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Stock</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a stock to the portfolio, please enter your stock details
            here. It will be added to your portfolio
          </DialogContentText>

          <Container component="main" maxWidth="sm">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="quantity"
                label="number of kitta"
                type="number"
                name="quantity"
                autoComplete="quantity"
                autoFocus
                onChange={(e) => setKitta(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="script"
                label="Script name"
                type="text"
                id="script"
                autoComplete="current-password"
                onChange={(e) => setScript(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Buy Price"
                id="script"
                type="number"
                autoComplete="current-password"
                onChange={(e) => setBuyPrice(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="currentPrice"
                label="current Price"
                id="currentPrice"
                type="number"
                autoComplete="currentPrice"
                onChange={(e) => setCurrentPrice(e.target.value)}
              />
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
