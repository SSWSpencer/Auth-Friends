import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { FaTrash } from 'react-icons/fa';

const Profile = props => {

    const [friendList, setFriendList] = useState([])
    useEffect(()=> {
        axiosWithAuth()
            .get('/api/friends')
            .then(res=>{
                setFriendList(res.data);
            })
    }, [])

    const [newFriend, setNewFriend] = useState({
        credentials: {
            id: Date.now(),
            name: "",
            age: "",
            email: "",
        }
    })

    const handleChange = e => {
        setNewFriend({
            credentials: {
                ...newFriend.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const addFriend = () => {
        axiosWithAuth()
            .post("/api/friends", newFriend.credentials)
            .catch(err => { console.log({err})})
    }

    const delFriend = id => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(res => {
                console.log("Deleted friend #" + id)
                window.location.reload(false);
                
            })
            .catch(err=> { console.log({err}) })
    }
    

    return(
        <div>
            <h2>Welcome to your profile!</h2>
            <div>
                <form onSubmit={addFriend}>
                    <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newFriend.credentials.name}
                    onChange={handleChange}
                    />
                    <input 
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={newFriend.credentials.age}
                    onChange={handleChange}
                    />
                    <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={newFriend.credentials.email}
                    onChange={handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>

            <div className="friendList">
                <h4>Here is a list of all of your friends!</h4>
                {friendList.map(friend => {
                    return(<div className="friend" key={friend.name}><p>{friend.name}, {friend.age}, {friend.email}</p> <a href=""><FaTrash onClick={() => delFriend(friend.id)} /></a></div>)
                })}
            </div>
        </div>

    )
}

export default Profile;