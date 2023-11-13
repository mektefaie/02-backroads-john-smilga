import aboutImg from '../assets/images/about.jpeg'
import SectionsTitle from './SectionsTitle'

const About = () => {
  return (
    <section className='section' id='about'>
      <SectionsTitle title='about' coloredTitle='me' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>front-end web developer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
