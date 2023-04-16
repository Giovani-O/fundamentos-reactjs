// JSX - JavaScript + XML

import { Post } from './Post.jsx';
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
        <Post 
          author="Gio"
          content="L
            orem ipsum dolor sit amet consectetur adipisicing elit. Delectus nulla perferendis explicabo illo, provident, 
            cumque dolorem tempora aspernatur officiis beatae in iusto, dicta magni! Provident fuga dolorum possimus quasi pariatur?
          "
        />
        </main>
      </div>
    </div>
  )
}
