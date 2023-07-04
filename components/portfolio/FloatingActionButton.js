import { Fab, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButton(props) {
  const floatingMenuButtonStyle = {
    backgroundColor: "#DEEAF6",
    color: "#8A3473",
    position: "fixed",
    bottom: "5%",
    right: "5%",
  };

  return (
    <>
      <Stack
        spacing={4}
        direction="row"
        style={floatingMenuButtonStyle}
      >
        <Fab onClick={props.click} color="warning" aria-label="add">
          <AddIcon />
        </Fab>
      </Stack>
    </>
  );
}
