import React from 'react'
import Question from '@/components/word-based-question/Question'

const WBQ1 = () => {
    return (
        <Question
            tries={2}
            question='BlackRock, one of the largest asset management firms in the world, does not hold equity in which of the following companies?'
            options={['Microsoft', 'Google (Alphabet Inc.)', 'Tesla', 'SpaceX']}
            answer='SpaceX'
        />
    )
}

export default WBQ1
