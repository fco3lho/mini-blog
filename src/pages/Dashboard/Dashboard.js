import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom"

//hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

export const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  //posts do usuario
  const posts = []

  return (
    <div>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Você ainda não publicou nada.</p>
            <Link to="/posts/create" className="btn">Criar primeiro post</Link>
          </div>
        ) : (
          <div>
            <p>kflkd</p>
          </div>
        )}
    </div>
  )
}

export default Dashboard
