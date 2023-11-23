import React from 'react'
import './main.css'

const Main = ({pageTitle,children}) => {
  return (
    <div>
        <main>
            <div>{children}</div>
        </main>
      
    </div>
  )
}

export default Main
