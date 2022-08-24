// react imports
import { useState } from "react";

// libraries
import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

// custom components
import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don't ya feel great?!",
    "Up, up, and up!",
    "Um…okay",
    "Did you though?",
    "Don't feel like you tried your best…",
    "FAget about it!",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCompleted(false);
  };

  const handleInput = (event) => {
    setThing(event.target.value);
  };

  const handleCompletedThing = async (event) => {
    event.target.setAttribute("disabled", true);
    setThing(getSuccessMessage(event.target.value));
    await jsConfetti.addConfetti();
    event.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(true);
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200 ">
      <div className="grid place-items-center gap-8 m-8 ">
        {isCompleted ? (
          <CustomForm
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        ) : (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

export default App;
