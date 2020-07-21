import React from 'react'
import Feature from './Feature'
const data = [
  {
    img: "https://image.freepik.com/free-vector/student-reading-illustration_23-2147529876.jpg?1",
    alt: "Education",
    heading: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem possimus reprehenderit deleniti optio hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, maiores.",
    reverse: false
  },
  {
    img: "https://image.freepik.com/free-vector/student-reading-illustration_23-2147529876.jpg?1",
    alt: "Education",
    heading: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem possimus reprehenderit deleniti optio hic. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
    reverse: true
  },
  {
    img: "https://image.freepik.com/free-vector/student-reading-illustration_23-2147529876.jpg?1",
    alt: "Education",
    heading: "Lorem ipsum dolor sit",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorem possimus reprehenderit deleniti optio hic. Lorem ipsum dolor sit amet.",
    reverse: false
  },

]

export default function FeatureList() {
  return (
    <>
      {data.map(feature => {
        return (
          <Feature features={feature}/>
        )
      })}
    </>
  )
}
