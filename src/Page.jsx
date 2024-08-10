import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineCall } from "react-icons/md";

const Page = (props) => {
    return (
        <Link to={props.link} className='px-6 py-4 bg-themeBlue font-jakarta text-16 font-semibold rounded text-white flex items-center gap-4 max-w-max'>{props.iconStatus && <MdOutlineCall size="24px" />}{props.title}</Link>
    )
}

export default Page;