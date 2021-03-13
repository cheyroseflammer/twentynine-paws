import Button from '../Button/Button'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-container'>
      <video src='assets/video.mp4' autoPlay loop muted />
      <h1>29 PAWS PET GROOMING</h1>
      <h4>
        We provide quality grooming by educated and skilled professionals.
      </h4>
      <p>
        Our Mission as a family owned buisness is to provide a healthy and
        positive grooming experience for your pet in a professional and
        stress-free environment. All pets are treated with love and kindness, as
        well as from a professional and humane approach. It is our goal to
        assure owners that their pets will be treated with the same love and
        respect as we treat our own beloved pets.
      </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          FORMS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('calling')}
        >
          <a href='tel:5555555555'>CALL US</a> <i className='fa fa-phone' />
        </Button>
      </div>
    </div>
  )
}
