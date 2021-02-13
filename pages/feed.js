import { useState, useEffect } from 'react';
import db from '../config/firebase';
import PostCard from '../components/postcard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '../components/layout'

export default function Feed() {
    
    //test out how firestore works
    const [message, setMessage] = useState('message')
    const [postList, setPostList] = useState([])

    const handleChange = (e) => {
        // handles input text change
        setMessage(e.target.value)
    }

    const handleClick = (ev) => {
        // handles the button click
        ev.preventDefault()
        console.log("Button clicked, passing value", message) // message cannot be undefined
        if (message) {
            db.collection("globalfeed").add({ // the collection must exist
                username: "test",
                text: message,
            }).then((docRef) => {
                console.log("Written document ", docRef.id)
            }).catch((error) => {
                console.error("Error adding document ", error)
            })
        }
    }

    useEffect(() => {
        //  we update the list of posts
        db.collection("globalfeed")
            .onSnapshot((snapshot) => {
                setPostList(
                    snapshot.docs.map((doc) => doc.data())
                )
            }, (error) => {
                console.log(error)
            })
    }, []) // on initial render
    
    // (e) => setMessage(e.target.value)
    
    return (
        <Layout title="News Feed" highlight="FEED" bartitle="Feed">
            <div>
                <form> 
                    <input value={message} onChange={handleChange} type="text" placeholder="Send a message to test Firestore" />
                    <button onClick={handleClick}> Test </button>
                </form>
            </div>

            <div>
                { postList.length > 0 ?
                    postList.map((k) => (// not {
                        <PostCard title={k.username} content={k.text} />
                    ))
                    : 
                    <CircularProgress />
                }
            </div>
        </Layout>
    )
}