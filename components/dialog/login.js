import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'; 
import Radio from '@material-ui/core/Radio'; 
import RadioGroup from '@material-ui/core/RadioGroup'; 
import FormControlLabel from '@material-ui/core/FormControlLabel'; 
import FormControl from '@material-ui/core/FormControl'; 
import FormLabel from '@material-ui/core/FormLabel'; 
 
 
import { useEffect, useState } from 'react' 
 
// Firebase
import firebase from 'firebase'
import db from '../../config/firebase' 
import { login, register, resetPassword } from "../../helpers/auth" 

const LoginDialog = (props) => {
     
    const [emauthAddress, setEmauthAddress] = useState("") 
    const [emauthPassword, setEmauthPassword] = useState("") 
    const [radioValue, setRadioValue] = useState("newuser") 
    const [errorMsg, setErrorMsg] = useState("") 
     
     
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
     
    const handleSubmit = e => { 
        e.preventDefault(); 
        if (radioValue == "newuser") { 
            handleRegister(e) 
        } else { 
            login(emauthAddress, emauthPassword) 
            .then(usr => { 
              window.user = usr 
              window.location.pathname = "/" 
            }) 
            .catch(error => { 
              setErrorMsg('Invalid username/password.') 
            }); 
        } 
        
    }; 
     
    const handleRadioChange = e => { 
        setRadioValue(e.target.value) 
    } 
     
    const handleRegister = e => { 
        e.preventDefault(); 
        let res = window.confirm("Create user with " + emauthAddress + "?") 
        if (res) { 
          register(emauthAddress, emauthPassword) 
            .then(usr => { 
              window.user = usr 
              window.location.pathname = "/" 
            }) 
            .catch(error => { 
              console.log(error) 
              setErrorMsg("(registration error) " + error.message) 
            }); 
        } 
    } 
     
    const resetPassword = () => { 
        resetPassword(emauthAddress) 
            .then(() => 
                setErrorMsg(`Password reset email sent to ${emauthAddress}.`) 
            ) 
            .catch(error => setErrorMsg(`Email address not found.`)); 
    }; 
     
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
                value={emauthAddress}
                onChange={(e) => { setEmauthAddress(e.target.value) } }
            />
            
            <br/>

            <TextField
                margin="dense"
                fullWidth
                id="text-password"
                label="Password"
                type="password"
                value={emauthPassword}
                onChange={(e) => setEmauthPassword(e.target.value)}
            />
             
            <RadioGroup row value={radioValue} onChange={handleRadioChange}> 
                <FormControlLabel value="newuser" control={<Radio />} label="New user"></FormControlLabel> 
                <FormControlLabel value="returninguser" control={<Radio />} label="Returning user"></FormControlLabel> 
            </RadioGroup> 
             
            <DialogContentText> { errorMsg } </DialogContentText> 
             
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={props.onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary" autoFocus>
                Save progress
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog
