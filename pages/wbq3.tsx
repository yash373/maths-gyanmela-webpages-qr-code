import React from 'react'
import Question from '@/components/word-based-question/Question'

const WBQ3 = () => {
  return (
    <Question question='In which city is the great pyramids of Giza located?' answer='Giza' options={['Cairo', 'Alexandria', 'Suez', 'Giza']} tries={2} />
  )
}

export default WBQ3
