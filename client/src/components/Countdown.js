import React, { useEffect, useState } from "react"
import img1 from "../assets/IMG_7878.png"
import img2 from "../assets/IMG_7881.png"
import img3 from "../assets/IMG_7884.png"
import img4 from "../assets/IMG_7888.png"
import img5 from "../assets/IMG_7891.png"
import img6 from "../assets/IMG_7894.png"
import img7 from "../assets/IMG_7897.png"
import img8 from "../assets/IMG_7900.png"
import img9 from "../assets/IMG_7904.png"
import img10 from "../assets/IMG_7908.png"
import img11 from "../assets/IMG_7911.png"
import img12 from "../assets/IMG_7914.png"
import imgbreak from "../assets/restImg.png"
import style from "../styles/countdown.css"

function Countdown(props) {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ]
  const [img, setImg] = useState(img1)

  useEffect(() => {
    changeImage(0)
  }, [])

  function changeImage(imgIndex) {
    console.log(imgIndex)
    setTimeout(() => {
      if (imgIndex !== 0) {
        setImg(imgbreak)
        setTimeout(() => {
          setImg(images[imgIndex])
          if (!(imgIndex + 1 == images.length)) {
            changeImage(imgIndex + 1)
          }
        }, 1000)
      } else {
        setImg(images[imgIndex])
        changeImage(imgIndex + 1)
      }
    }, 3000)
  }

  return (
    <div>
      <div className="Countdown-header">Full Body Workout</div>
      <div className="Countdown">
        <img src={img} />
      </div>
      <div>
        <button onClick={(e) => changeImage(0)}> Let's Go Again</button>
      </div>
    </div>
  )
}
export default Countdown
