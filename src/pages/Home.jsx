import { useState} from 'react'
import prom from '../assets/prom.jpg';
import insta from '../assets/instagram_icon.png'
import linkedin from '../assets/LinkedIn_logo_initials.png'
import resume from '../assets/resume_icon.png'
import gh from '../assets/github_logo.png'
import r from '../assets/resume.pdf'
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="facecard">
        <img src = {prom} className="circle"/>
        <div>
        <h2 className='text-2xl font-bold'>Student @ UC Santa Cruz</h2>
        <h2 className='text-2xl '>Computer Science B.S</h2>
        </div>
      </div>
      <div className='overview'>
      </div>
      <br></br>
      <div className="about">
        <div className="header">Hello! I'm Tyler</div>
        I am a sophmore at UC Santa Cruz. I am passionate about Full-Stack web development as well as AI/ML. I am currently a member of the UCSC Rocket Team in the Computer Vision subteam.
      </div>
      <br></br>
  <div className="footer_content">
    <div className= "footer_row">
      <img src = {insta} className='icon'/>
      <a href = "https://www.instagram.com/tyler.ham112/">tyler.ham112</a>
      <img src= {linkedin} className='icon'/>
      <a href = "https://www.linkedin.com/in/tyler-ham-cs/">tyler.ham112</a>
    </div>
    <div className= "footer_row">
      <img src= {gh} className='icon'/>
      <a href = "https://github.com/tyler-ham05">tyler-ham05</a>
      <img src= {resume} className='icon'/>
      <a href = {r}>resume</a>
    </div>
</div>
    </>
  )
}

export default Home

