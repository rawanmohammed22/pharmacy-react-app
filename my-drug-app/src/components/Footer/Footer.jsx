import React from 'react'


export default function Footer() {
  return (
   <>
       <div className="container mx-auto flex justify-between my-11">
        {/* القسم الأول */}
        <div>
          <h3 className="font-bold text-lg">ABOUT</h3>
          <p className="text-gray-400">We provide the best drug interaction information.</p>
        </div>

        {/* القسم الثاني */}
        <div>
          <h3 className="font-bold text-lg">CONTACT US</h3>
          <p className="text-gray-400">Email: support@drugschecker.com</p>
        </div>

        {/* القسم الثالث */}
        <div>
          <h3 className="font-bold text-lg">RESOURCES</h3>
          <ul className="text-gray-400">
            <li><a href="#">Drug Guides</a></li>
            <li><a href="#">Health News</a></li>
            <li><a href="#">Medical Advice</a></li>
          </ul>
        </div>
      </div>
   </>
  )
}
