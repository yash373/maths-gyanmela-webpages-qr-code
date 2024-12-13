import React, { useState } from 'react';

interface GQuestionProps {
  question: string;
  answer: string;
  imageUrl: string;
}

const GQuestion = ({ question, answer, imageUrl }: GQuestionProps) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
      setCorrect(true);
    }
  };

  return (
    <div className='flex h-screen items-center justify-center space-y-4 flex-col'>
      <img src={imageUrl} alt="question related" className='h-1/3' />
      <div className='text-2xl capitalize font-semibold'>
        {question}
      </div>
      <form className='space-x-2' onSubmit={handleSubmit}>
        <input
          type='text'
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          className='border-2 dark:text-black border-gray-400 p-2'
        />
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Submit
        </button>
      </form>
      {submitted && correct && <p className='text-green-600'>Correct!</p>}
      {submitted && !correct && <p className='text-red-600'>Incorrect</p>}
    </div>
  );
};

export default GQuestion;
