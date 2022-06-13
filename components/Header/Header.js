import style from './Header.module.scss'
import logo from '../../assets/logo_paboo.png'
import Image from 'next/image'

const Header = () => {
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sep',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  }
  const today = new Date()
  const currentDate = months[today.getMonth()+1]+' '+today.getDate()+', '+today.getFullYear();

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