import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/event1.png',
    title: 'Community Sports Meet 2025',
    subtitle: 'Overnight celebration on Shivaratri'
  },
  {
    image: '/images/event2.png',
    title: 'Cultural Festival Highlights',
    subtitle: 'Bringing traditions to life'
  },
  {
    image: '/images/event3.png',
    title: 'Family Picnic Day',
    subtitle: 'Community bonding at its best'
  },
  {
    image: '/images/event4.png',
    title: 'Republic Day Celebrations',
    subtitle: 'Patriotism & Unity'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="hero-carousel__track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-carousel__slide ${
              index === currentSlide ? 'hero-carousel__slide--active' : ''
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-carousel__image"
            />
            <div className="hero-carousel__overlay" />
            <div className="hero-carousel__caption">
              <h2 className="hero-carousel__caption-title">{slide.title}</h2>
              <p className="hero-carousel__caption-text">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-carousel__arrow hero-carousel__arrow--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        className="hero-carousel__arrow hero-carousel__arrow--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      <div className="hero-carousel__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel__dot ${
              index === currentSlide ? 'hero-carousel__dot--active' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
