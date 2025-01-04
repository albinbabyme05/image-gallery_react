import { useState } from "react"


const ImageGallery =(arrImg)=> {
  const [imageNUmber, setImageNumber] = useState(0)
  const [openImg, setOpenImg] = useState(false)

  return (
    <div>
        <div className="gallers-container">
            {
                arrImg && arrImg.map((objImg, position)=>{
                    return(
                        <div className="'gallery-div" key={position}>
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