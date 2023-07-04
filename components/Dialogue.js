import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

export default function ResponsiveDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter()

  const handleClose = (path)=>{
    router.push(path)
  }
  
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open= {true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {props.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.errorText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button autoFocus onClick={()=>handleClose("/login")}>
            {props.option1}
          </Button>

          <Button onClick={()=>handleClose("/signup")} autoFocus>
            {props.option2}
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}