import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;  //translateX

  const slideForward = ()=> {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  const slideBackward = ()=> {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider} >
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Gideon Washington</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Enrolling at Edusity was a game-changer for me. The curriculum is challenging yet rewarding, and the professors go above and beyond to ensure that every student succeeds. The hands-on learning opportunities and real-world applications have prepared me not just for exams, but for my future career.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Maureen Clark</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>From the moment I stepped onto Edusity's campus, I knew I was in the right place. The welcoming atmosphere, combined with the cutting-edge technology and resources available to students, has made my educational journey both enjoyable and fruitful. I am confident that the skills and knowledge I've gained here will serve me well in the years to come.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Adnan Middleton</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing Edusity was one of the best decisions of my life. The blend of rigorous academics, innovative teaching methods, and a community that fosters personal growth has been nothing short of inspiring. The support I've received from faculty and peers alike has motivated me to reach my full potential.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
