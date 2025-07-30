import styles from "../app/Navbar.module.css"
import Link from "next/link"

export default function Navbar() {
    console.log()
    return (
         <nav className={styles.nav}>
             <ul className={styles.ul}>
                 <Link href={"/"}>
                <li>Home</li>
                 
                 
                 </Link>
                <Link href="/posts" >
                <li>Posts</li>
                </Link>
                <Link href="/users">
                <li>Users</li>
                </Link>
                <input placeholder="Search..." type="text"></input>
             </ul>
         </nav>
    )
}
