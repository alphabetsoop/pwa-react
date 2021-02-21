import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Firebase
import firebase from 'firebase'
import db from '../../config/firebase'

const LoginDialog = (props) => {

    async function emailCreateAcct() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(emauthAddress, emauthPassword)
            console.log("Creating user...")
            props.onClose()
        } catch (e) {
            // handle exceptions, refuse to close dialog 
            console.error(e.message)
            alert(e.message)
        }
    }

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
                fullWidth
                margin="dense"
                id="text-emailaddress"
                label="Email Address"
                type="email"
                value={props.emauthAddress}
                onChange={(e) => props.handleChangeEmail(e.target.value)}
            />
            
            <br/>

            <TextField
                margin="dense"
                fullWidth
                id="text-password"
                label="Password"
                type="password"
                value={props.emauthPassword}
                onChange={(e) => props.handleChangePassword(e.target.value)}
            />

            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={props.onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={emailCreateAcct} color="primary" autoFocus>
                Save progress
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
