import React from 'react'
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    children: React.ReactNode;
    setSelectedPage:(value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className='rounded-md px-10 py-2 bg-primary-500 text-white'
        onClick={()=>{setSelectedPage(SelectedPage.AboutUs)}}
        href={`#${SelectedPage.AboutUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton