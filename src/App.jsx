
import ImageGallery from './components/ImageGallery'

function App() {
  /* create a array for static image */
  const arrImg = [
    {img : '../public/images/1.jpg'},
    {img : '../public/images/2.jpg'},
    {img : '../public/images/3.jpg'},
    {img : '../public/images/4.jpg'},
    {img : '../public/images/5.jpg'},
    {img : '../public/images/6.jpg'},
    {img : '../public/images/7.jpg'},
    {img : '../public/images/8.jpg'},
    {img : '../public/images/9.jpg'},
    {img : '../public/images/10.jpg'},
    {img : '../public/images/11.jpg'},
    {img : '../public/images/12.jpg'},
  ]

  return (
    <>
      <ImageGallery arrImg={arrImg}></ImageGallery>
    </>
    
  )
}

export default App
