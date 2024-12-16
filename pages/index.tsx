import React from 'react'

const Index = () => {
  return (
    <div className='flex text-black bg-white h-screen flex-col'>
      <Heading /> 
      <Subheading /> 
      <Benefits /> 
    </div>  
  )
}

const Heading = () => {
  return (
    <header className='p-4 text-center shadow-md'>
      <h1 className='text-3xl font-bold'>Trail of Trivia</h1>
    </header>
  )
}
const Subheading = () => {
  return (
    <section className='p-3 text-center shadow-sm'>
      <h2 className='text-xl font-semibold text-gray-700'>Welcome to the Trail of Trivia</h2>
    </section>
  )
}

const Benefits = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <h3 className="text-lg font-semibold">Critical Thinking</h3>
        <p className="text-gray-600">Our board exam teaches critical thinking skills which are beneficial in all aspects of life.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Problem Solving</h3>
        <p className="text-gray-600">By teaching critical thinking skills, our board exam helps students develop problem solving skills.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold">Analytical Skills</h3>
        <p className="text-gray-600">Our board exam teaches analytical skills which are essential in today's fast paced world.</p>
      </Card>
    </div>
  )
}

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      {children}
    </div>
  )
}

export default Index