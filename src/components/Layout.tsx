import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout__header'>
        <h1>Demopad</h1>
      </div>
      <div className='layout__body'>{children}</div>
    </div>
  )
}

export default Layout
