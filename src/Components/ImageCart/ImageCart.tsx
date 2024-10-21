import { Showimg } from "../../Store/GallerySlice"
import { useAppDispatch } from "../../Store/hooks"
import "./ImageCart.css"
type Imgsrcprop={
    imgsrc:string
    id:number
    
}


const ImageCart = ({imgsrc,id}:Imgsrcprop) => {
  const dispatch=useAppDispatch()
   return (
     
     <div className="cart-container" >
        <img src={imgsrc} alt="" onClick={()=>dispatch(Showimg(id))}/>
        
       
      
      
    </div>
  )
}

export default ImageCart
