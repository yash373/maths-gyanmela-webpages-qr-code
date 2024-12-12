import React from 'react'
import Question from '@/components/word-based-question/Question'

const WBQ2 = () => {
  return (
    <Question question='A clock strikes the hour based on the Fibonacci sequence, with the number of chimes equal to the sequence’s position in hours (1 for 1st hour, 1 for 2nd hour, 2 for 3rd hour, etc.). At exactly 3:21 PM, the hands of the clock align perfectly, pointing to a 3-digit prime number if viewed as angles. Calculate this prime number and determine which planet in the solar system has a corresponding orbital period (in Earth days) closest to it.' answer='113 Mercury' />
  )
}

export default WBQ2