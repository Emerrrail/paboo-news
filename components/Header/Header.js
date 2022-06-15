import style from './Header.module.scss'
import logo from '../../assets/logo_paboo.png'
import Image from 'next/image'
import { currentDate } from '../meta/meta'

const Header = () => {
  
  return (
    <div className={style.header}>
      <div className={style.logo_container}>
        <Image
          className={style.logo}
          src={logo}
          alt="paboo news logo"
          width={150}
          height={75}
        />
      </div>
      <div className={style.local_data}>
        <p className={style.date}>{currentDate}</p>
        <p className={style.weather}>Taipei 25°C</p>
      </div>
    </div>
  );
}
 
export default Header;