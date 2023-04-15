// JSX - JavaScript + XML

import { Post } from './Post.jsx';
import { Header } from './components/Header.jsx';
import './styles.css';

export function App() {

  return (
    <div>
      <Header />
      
      <Post 
        author="Gio"
        content="L
          orem ipsum dolor sit amet consectetur adipisicing elit. Delectus nulla perferendis explicabo illo, provident, 
          cumque dolorem tempora aspernatur officiis beatae in iusto, dicta magni! Provident fuga dolorum possimus quasi pariatur?
        "
      />
    </div>
  )
}
