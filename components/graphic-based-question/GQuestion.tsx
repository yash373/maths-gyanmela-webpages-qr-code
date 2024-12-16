import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

interface QuestionProps {
  question: string,
  imageUrl: string,
  options: string[],
  answer: string,
  tries: number
}

interface QuestionState {
  userAnswer: string;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  correct: boolean;
  setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  tries: number;
  setTries: React.Dispatch<React.SetStateAction<number>>;
}

export const QuestionContext = createContext<QuestionState>({
  userAnswer: '',
  setUserAnswer: () => { },
  submitted: false,
  setSubmitted: () => { },
  correct: true,
  setCorrect: () => { },
  tries: 0,
  setTries: () => { }
});

const code = 399

const GQuestion = ({ question, imageUrl, options, answer, tries: numberOfTries }: QuestionProps) => {
  // const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [tries, setTries] = useState(numberOfTries);
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const entered = prompt('Enter the code');
    if (entered === code.toString()) {
      setAllowed(true)
    }
  }, [])

  const handleOptionClick = (selectedAnswer: string) => {
    if (tries > 0 && !correct) {
      if (selectedAnswer === answer) {
        setCorrect(true);
        alert('Correct answer!');
      } else {
        alert('Wrong answer! Try again.');
        setTries(tries - 1);
      }
    }
  };

  return (
    <>
      {allowed && <div className='flex my-5 items-center justify-center'>
        <div className='flex flex-col space-y-10 w-full max-w-md'>
          <div className='text-2xl text-center capitalize font-semibold'>{question}</div>
          <img className='h-1/2 min-h-50 w-[80%] mx-auto' src={imageUrl} alt={question} />
          <div className='flex flex-col space-y-4 w-full mx-auto'>
            {options.map((option, index) => (
              <Option
                key={index}
                answer={option}
                clickFunction={() => handleOptionClick(option)}
              />
            ))}
          </div>
          <div className='text-center'>
            Tries left: {tries}
          </div>
          {!correct && tries === 0 && <div className='text-center text-red-600'>Better luck next time...</div>}
          {correct && <div className='text-center text-green-600'>You got lucky this time...</div>}
        </div>
      </div>}
    </>
  );
};

export const Option = ({ answer, clickFunction }: { answer: string, clickFunction: () => void }) => {
  return (
    <button onClick={clickFunction} className='py-2 hover:cursor-pointer bg-blue-500 hover:bg-blue-700 w-full text-white font-bold px-4 rounded'>
      {answer}
    </button>
  )
}

export default GQuestion;

