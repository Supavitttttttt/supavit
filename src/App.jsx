import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/react.svg" />

        <Title title="Supavit Konganya (Jay)">
          <h3>ตำแหน่ง : Game Developer</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/08/01").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66909155077
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email :s64122202022@ssru.ac.th</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>I have a keen interest in Game Development, Web Development, Software Testing, as well as basic Graphic Design and creation using Photoshop. I excel in leadership roles and problem-solving, and I am also interested in utilizing AI for problem identification and resolution.</p>
        </Title>

        <Title title="✎ Work Experience">
          <p>Website design and development with HTML,CSS</p>
          <p>Being an online game administrator Player quiz position
</p>
        <p>Designing and editing images for use in selling ROV game IDs.
</p>
        <p>Design and develop game projects
   Vr Na Kluea together with the Na Kluea community, Samut Songkhram Province</p>

        </Title>

        <Title title="⭐ Skills">
        <p>HTML / CSS /JS</p>
        <p>React.js</p>
        <p>Photoshop</p>
        <p>Unity3D</p>

        </Title>
      </div>
    </main>
  )
}

export default App
