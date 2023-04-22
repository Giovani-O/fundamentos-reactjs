// JSX - JavaScript + XML

import { Header } from "./components/Header.jsx";
import { Post } from "./components/Post.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com./giovani-o.png",
      name: "Giovani de Oliveira",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "[Fixed] Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Dolor earum, doloribus atque quis, dolores aliquid sint maxime dolore voluptatem nihil mollitia. Officia molestiae distinctio nostrum fuga et, earum libero quia!",
      },
      { type: "link", content: "Lorem Ipsum." },
      { type: "link", content: "#WebDevelopment" },
      { type: "link", content: "#React" },
    ],
    publishedAt: new Date("2023-04-21 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com./giovani-o.png",
      name: "Giovani de Oliveira",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content:
          "[Fixed] Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        type: "paragraph",
        content:
          "Dolor earum, doloribus atque quis, dolores aliquid sint maxime dolore voluptatem nihil mollitia. Officia molestiae distinctio nostrum fuga et, earum libero quia!",
      },
      { type: "link", content: "Lorem Ipsum." },
      { type: "link", content: "#WebDevelopment" },
      { type: "link", content: "#React" },
    ],
    publishedAt: new Date("2023-04-21 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
