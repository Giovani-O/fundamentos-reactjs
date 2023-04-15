// JSX - JavaScript + XML

import { Post } from './Post.jsx';

export function App() {

  return (
    <div>
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
