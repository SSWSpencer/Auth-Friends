import React from "react";

const HomePage = () => {
    return (
        <>
            <h1>FriendBook</h1>
            <div className="hpWrapperTop">
                <div className="hpCard">
                    <h4>Your Personal Friend Profile</h4>
                    <p>Welcome to your personal profile for managing your friends!</p>
                    <p>Here you can add and delete friends, not just from your personal or social life, but from a website!</p>
                </div>
                <div className="hpCard">
                    <h4>No Strings Attached!</h4>
                    <p>Do you not have only a few friends? Or maybe none at all? Are you just an unlikeable person in general?</p>
                    <p>No problem! Here, you can add anyone you want to your personalized group of friends! And the best part is, there's no way for them to deny your friendship request!</p>
                </div>
            </div>
            <div className="hpWrapperBottom">
                <div className="hpCard">
                    <h4>Destroy the Competition! (Or your friends!)</h4>
                    <p>Due to our state-of-the-art friend adding technology (Patent denied), you can have all the friends in the world! Way more than that popular kid Brad in highschool! </p>
                    <p>Alternatively you might be a sadist and gain joy by pressing the "delete" button, removing people from your friend list. You can do that here too!</p>
                </div>
                <div className="hpCard">
                    <h4>Get Started!</h4>
                    <p>To get started using our state-of-the-art friend management tool, press the login button and log right in!</p>
                    <p>Don't have an account? Too bad! Go find somewhere else, creating an account currently doesn't exist</p>
                </div>
            </div>
        </>
    )
}
export default HomePage;