import styles from "./Dashboard.module.css"

import { Link } from "react-router-dom"

//hooks
import { useAuthValue } from "../../context/AuthContext"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

export const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  const {documents: posts} = useFetchDocuments("posts", null, uid)

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
            <p>Você possui posts</p>
          </div>
        )}

        {posts && posts.map((post) => 
          <h3>{post.title}</h3>
        )}
    </div>
  )
}

export default Dashboard
