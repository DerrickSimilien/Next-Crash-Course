import styles from "../app/Navbar.module.css"

export default function Navbar() {
    console.log()
    return (
         <nav className={styles.nav}>
             <ul className={styles.ul}>
                <li>Home</li>
                <li>Posts</li>
                <li>Users</li>
             </ul>
         </nav>
    )
}
