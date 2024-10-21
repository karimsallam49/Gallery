import { useEffect } from "react"
import Gridlist from "../Components/Gridlist/Gridlist"
import { useAppDispatch,useAppSelector } from "../Store/hooks"
import aCtGetGallery from "../Store/aCtGetGallery"
import LightBox from "../Components/Lightbox/LightBox"
import "./homepagestyle.css"

const Homepage = () => {
  const dispatch=useAppDispatch()
  const{showdata}=useAppSelector(state=>state.Galleryslice)
  useEffect(()=>{

    dispatch(aCtGetGallery())
  },[dispatch])
   
  return (
    <div className="home-container">
      <Gridlist/>

      <div className={showdata?"active":"overlay-container"}>
        <LightBox/>

      </div>
    </div>
  )
}

export default Homepage
