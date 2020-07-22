import Link from 'next/link'
import styles from './navbar.module.css'

export const Navbar = () => (
  <header className={styles.header}>
    <div className="left flex items-center">
      <div className="mr-6">
        <p className="text-3xl">Pablo Egido</p>
      </div>
      <div>
        <ul className="flex">
          <li className="mr-4"><Link href="/"><a>Home</a></Link></li>
          <li className="mr-4"><Link href="/about"><a>About</a></Link></li>
          <li className="mr-4"><Link href="/portfolio"><a>Portfolio</a></Link></li>
          <li className="mr-4"><Link href="/blog"><a>Blog</a></Link></li>
          <li className="mr-4"><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </div>
    </div>
    {/* SUN ICON */}
    <div className="bg-yellow-400 w-5 h-5">

    </div>
  </header>
);
