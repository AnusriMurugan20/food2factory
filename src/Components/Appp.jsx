import { useState } from 'react'
import './Hom.css'
import Header from '../Components/Header'
import Sidebarr from '../Components/Sidebarr'
import Hom from '../Components/Hom'

function Appp() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebarr openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Hom />
    </div>
  )
}

export default Appp