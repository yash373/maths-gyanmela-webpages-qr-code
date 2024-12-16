import React from 'react'
import Question from '@/components/word-based-question/Question'

const WBQ2 = () => {
  return (
    <Question options={["366 days","367 days","365 days","350 days"]} tries={2} question='How many days are there in a leap year?' answer='366 days' />
  )
}

export default WBQ2