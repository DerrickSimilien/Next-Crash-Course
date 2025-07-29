import styles from "../app/Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    console.log()
    return (
         <nav className={styles.nav}>
             <ul className={styles.ul}>
                <li>Home</li>
                <Link href="/posts" >
                <li>Posts</li>
                </Link>
                <Link href="/users">
                <li>Users</li>
                </Link>
             </ul>
         </nav>
    )
}
