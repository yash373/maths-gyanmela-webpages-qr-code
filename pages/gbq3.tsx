import React from 'react'
import GQuestion from '@/components/graphic-based-question/GQuestion'

const GBQ3 = () => {
  return (
    <GQuestion imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vXYfJDR7uzv8D34w6KS0Gg6OG1wgmOqbPg&s' question='Identify this man from the image' answer='Narendra Modi' options={['Rahul Gandhi', 'Monkey D Luffy', 'Narendra Modi', 'Amit Shah']} tries={2} />
  )
}

export default GBQ3

