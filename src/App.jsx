// react imports
import { useState } from "react";

// library imports
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

// custom components
import CustomForm from "./components/CustomForm";

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

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <>
            <CustomForm />
            <h1 className="text-3xl md:text-5xl font-bold text-center">
              What is your "One Thing"?
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800 bg-slate-200"
            >
              <input
                value={thing}
                onInput={handleInput}
                type="text"
                className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-lg md:text-xl placeholder:text-slate-400 caret-teal-600 appearance-none"
                placeholder="Your One Thing"
                autoFocus
                maxLength="64"
              />
              <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600">
                <ArrowRightCircleIcon className="h-12 w-12 " />
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
