import {  useAppSelector } from "../../Store/hooks"


const LightBox = () => {
  const {getid,record}=useAppSelector((state)=>state.Galleryslice)
  const rendreitems=record.filter((el)=>el.id===getid)

  const render=rendreitems.length>0?rendreitems.map((el)=>(
    <div className="cart-container" >
    <img src={el.download_url} alt=""/>
    
   
  
  
</div>
  )):""



  return (

    <div>

      {render}
    </div>
   
  )
}

export default LightBox
