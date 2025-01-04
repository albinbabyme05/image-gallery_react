import { useState } from "react"
import './ImageGallery.css'


const ImageGallery =(props)=> {
  const [imageNUmber, setImageNumber] = useState(0)
  const [openImg, setOpenImg] = useState(false)

  return (
    <div>
        <div className="gallery-container">
            {
                props.arrImg && props.arrImg.map((objImg, position)=>{
                    return(
                        <div className="gallery-div" key={position}>
                            <img src={objImg.img}/>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default ImageGallery