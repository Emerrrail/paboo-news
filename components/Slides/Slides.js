import style from './Slides.module.scss'
import Image from 'next/image'


const Slides = ({ news }) => {
  const newsOnSlides = news.slice(0, 5)

  const renderSlides = newsOnSlides.map((item, index) => {
    return <div className={style.slide} key={item.title} >
      <Image
        className={style.img}
        loader={() => item.urlToImage}
        src={item.urlToImage}
        alt={item.description}
        width={650}
        height={320}
        unoptimized
      />
      <h2 className={style.title}>{item.title}</h2>
    </div>
  })
  return (
    <div className={style.slidershow}>
      <div className={style.slides}>
        <input type='radio' name='radio' id={style.r1} />
        <input type='radio' name='radio' id={style.r2} />
        <input type='radio' name='radio' id={style.r3} />
        <input type='radio' name='radio' id={style.r4} />
        <input type='radio' name='radio' id={style.r5} />
        {renderSlides}
      </div>
      <div className={style.navigation}>
        <label htmlFor={style.r1} className={style.bar}></label>
        <label htmlFor={style.r2} className={style.bar}></label>
        <label htmlFor={style.r3} className={style.bar}></label>
        <label htmlFor={style.r4} className={style.bar}></label>
        <label htmlFor={style.r5} className={style.bar}></label>
      </div>
    </div>
  );
}
 
export default Slides;
