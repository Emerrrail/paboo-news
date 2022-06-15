import style from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <Link href="/"><a className={style.nav_text}>HOME</a></Link>
        <Link href="/news"><a className={style.nav_text}>NEWS</a></Link>
        <Link href="/sources"><a className={style.nav_text}>SOURCES</a></Link>
        <Link href="/about"><a className={style.nav_text}>ABOUT</a></Link>
    </nav>
  );
}
 
export default Navbar;