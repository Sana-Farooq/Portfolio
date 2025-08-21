import React, { useState } from 'react';
import './Projects.css';
import textUtils from '../../assets/textUtils.png';
import newsApp from '../../assets/newsApp.webp';
import paperGame from '../../assets/paperGame.png';
import TicTacToc from '../../assets/TicTacToc.jpeg';

function Projects() {
    const [showTextUtils, setShowTextUtils] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showGame1, setShowGame1] = useState(false);
    const [showGame2, setShowGame2] = useState(false);

    return (
        <>
            <h3 className='title text-center'>Recent Projects</h3>
            <div className="row w-100">
                <div className="col-md-6 d-flex">
                    <div className="card mb-3 h-100">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={textUtils} className="img-fluid rounded-start" alt="TextUtils App" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">TextUtils App</h5>
                                    <p className="card-text">TextUtils App is a simple text utility tool built with React.It allows users to perform quick text transformations such as converting text to uppercase/lowercase, removing extra spaces,copying text, and checking word/character count.</p>
                                    <button className="newsdetail" onClick={() => setShowTextUtils(true)}>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="card mb-3 h-100">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={newsApp} className="img-fluid rounded-start" alt="News App" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">News App</h5>
                                    <p className="card-text"> News App is a React-based application that fetches the latest news using an API.It allows users to browse news by categories (business, sports, technology, etc.),view headlines, and read summaries. The app also supports pagination for easy browsing.</p>
                                    <button className="newsdetail" onClick={() => setShowVideo(true)}>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showTextUtils && (
                    <div className="video-overlay">
                        <div className="video-popup">
                            <span className="close-btn" onClick={() => setShowTextUtils(false)}>
                                &times;
                            </span>
                            <video width="600" controls autoPlay>
                                <source src="/video/TextUtils.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
                {showVideo && (
                    <div className="video-overlay">
                        <div className="video-popup">
                            <span className="close-btn" onClick={() => setShowVideo(false)}>
                                &times;
                            </span>
                            <video width="600" controls autoPlay>
                                <source src="/video/NewsOrbitVideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                )}
                <div className="col-md-6 d-flex">
                    <div className="card mb-3 h-100">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={paperGame} className="img-fluid rounded-start" alt="Rock Paper Game" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Rock Paper Scissor App</h5>
                                    <p className="card-text"> Rock Paper Scissor App is a fun and interactive browser-based game where the player challenges the computer in the classic hand game. The game includes score tracking, instant results, and giving users a real-time competitive experience. It’s a simple project but a great example of using JavaScript logic.</p>
                                    <button className="gamedetail" onClick={() => setShowGame1(true)}>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex">
                    <div className="card mb-3 h-100">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={TicTacToc} className="img-fluid rounded-start" alt="TicTacToc Game" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Tic Tac Toc App</h5>
                                    <p className="card-text">This is a two-player browser-based game where players take turns marking spaces in a 3×3 grid. The goal is to place three marks (❌ or ⭕) in a row, column, or diagonal before the opponent.It’s built using HTML for structure, CSS for styling, and JavaScript for game logic.</p>
                                    <button className="gamedetail" onClick={() => setShowGame2(true)}>Watch Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showGame1 && (
                    <div className="video-overlay">
                        <div className="video-popup">
                            <span className="close-btn" onClick={() => setShowGame1(false)}>
                                &times;
                            </span>
                            <video width="600" controls autoPlay>
                                <source src="/video/Game1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                )}
                {showGame2 && (
                    <div className="video-overlay">
                        <div className="video-popup">
                            <span className="close-btn" onClick={() => setShowGame2(false)}>
                                &times;
                            </span>
                            <video width="600" controls autoPlay>
                                <source src="/video/Game 2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default Projects;
