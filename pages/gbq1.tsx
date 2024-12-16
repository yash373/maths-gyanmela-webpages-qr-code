import React from 'react'
import GQuestion from '@/components/graphic-based-question/GQuestion'

const GBQ1 = () => {
  return (
    <GQuestion imageUrl='https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg' question='Identify this economist from the image.' answer='Karl Marx' options={['John Maynard Keynes', 'Adam Smith', 'Abraham Lincoln', 'Karl Marx']} tries={2} />
  )
}

export default GBQ1
