import ImageCart from "../ImageCart/ImageCart"
import { useAppSelector } from "../../Store/hooks"
import { memo } from "react"
import "./Gridlist.css"
const Gridlist =memo( () => {
  const{record}=useAppSelector((state)=>state.Galleryslice)


    const rendergallery=record.length>0?record.map((src)=>(

      <div className="coloumn" >
            
           <ImageCart imgsrc={src.download_url}
           
           id={src.id} 
           />
            
            
            </div>
    )):"there is no image"

   

    
  return (

    <div className="container">
      {rendergallery}

   
    </div>
  )
}
)
export default Gridlist
