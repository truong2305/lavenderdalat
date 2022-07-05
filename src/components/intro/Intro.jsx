/** @format */

import Line from "../line/Line";
import Title from "../title/Title";
import "./intro.scss";
import intro from "../../assets/images/intro.jpg";
function Intro() {
  return (
    <section className='intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-8  offset-lg-2 col-12 offset-xl-0 mb-4 mb-xl-0'>
            <div className="intro-video">
              <img src={intro} alt='intro' />
              <div className="intro-video-play">
                <span><i class="fas fa-caret-right"></i></span>
              </div>
            </div>
          </div>
          <div className='col-xxl-5 col-lg-8 col-12 offset-lg-2 offset-xl-0 col-xl-6 offset-xxl-1'>
            <Title />
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec.
            </p>
            <Line />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
