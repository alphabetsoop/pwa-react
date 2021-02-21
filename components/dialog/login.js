import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LoginDialog = (props) => {
    return (
        <Dialog
            fullScreen={props.fullScreen}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title"> Login </DialogTitle>
            <DialogContent>
            
            <DialogContentText>
            Appear on the leaderboards! Login or create an account to save your progress.
            </DialogContentText>
            
            <TextField
                autoFocus
                margin="dense"
                id="text-emailaddress"
                label="Email Address"
                type="email"
                fullWidth
            />
            
            <br/>

            <TextField
                margin="dense"
                id="text-password"
                label="Password"
                type="password"
                fullWidth
            />

            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={props.onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={props.onSubmit} color="primary" autoFocus>
                Save progress
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
