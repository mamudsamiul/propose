import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import flowerBear from "./flowerBear.gif";
import madBear from "./madBear.gif";
import cryingBear from "./cryingBear.gif";
import angryBear from "./angryBear.gif";
import sadBear from "./sadBear.gif";
import disappointedBear from "./disappointedBear.gif";
import byeBear from "./byeBear.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 *
 * @returns {JSX.Element} JSX element representing the App component.
 */
const App = () => {
  // State to track acceptance and rejection
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);
  const [rejectedGifIndex, setRejectedGifIndex] = useState(0);

  // Array of rejection messages
  const rejectionTexts = [
    "Are you sure M'lady?",
    "Maybe try again cutie?",
    "Suhana think again!",
    "You are losing the chance",
    "Oh no! Don't break my heart 😢",
    "Is this really your final answer?",
    "Wait! Give it another thought ❤️",
    "This bear will be so sad now...",
    "Awww... Please reconsider!",
    "You are making a mistake, my love! 😭",
  ];

  // Array of bear GIFs for rejection
  const rejectionGifs = [madBear, cryingBear, angryBear, sadBear, disappointedBear, byeBear];

  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);

    // Select a new rejection message without repeating the last one
    let randomTextIndex;
    do {
      randomTextIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomTextIndex === lastRejectedIndex);

    setLastRejectedIndex(randomTextIndex);
    setNoButtonText(rejectionTexts[randomTextIndex]);

    // Select a new rejection GIF randomly without repetition
    let randomGifIndex;
    do {
      randomGifIndex = Math.floor(Math.random() * rejectionGifs.length);
    } while (randomGifIndex === rejectedGifIndex);

    setRejectedGifIndex(randomGifIndex);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? rejectionGifs[rejectedGifIndex] : flowerBear}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
