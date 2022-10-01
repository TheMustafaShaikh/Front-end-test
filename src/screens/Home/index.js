import React from "react";
import "./style.css";
import Button from "../../components/Button";

const Home = () => {
    return (
        <div>
            <div className="main-home">
                <div>
                    <img src="./picture.svg" alt="svg" />
                </div>
                <div className="main-content">
                    <h1 className="text">Imagine if</h1>
                    <h1 className="snapchat-text">Snapchat</h1>
                    <h1 className="text">had events.</h1>
                    <div className="content">
                        <p>
                            Easily host and share events with your friends across any social media.
                        </p>
                    </div>
                    <div className="lg-button">
                        <Button content='Create my event' emoji='🎉' path="/create" />
                    </div>
                </div>
            </div>
            <div className="sm-button">
                <Button content='Create my event' emoji='🎉' path="/create" />
            </div>
        </div>
    )
}

export default Home;