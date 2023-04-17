import styles from './Post.module.css';

export function Post() {
  return (
    <article className={ styles.post }>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/giovani-o.png" />
          <div className={styles.authorInfo}>
            <strong>Giovani de Oliveira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title="11 de Maio às 11:13" 
          dateTime="2022-05-11 08:13:30">Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <p>
          Dolor earum, doloribus atque quis, dolores aliquid sint maxime 
          dolore voluptatem nihil mollitia. 
          Officia molestiae distinctio nostrum fuga et, earum libero quia!
        </p>

        <p><a href="#">Lorem Ipsum.</a></p>
        <p>
          <a href="#">#WebDevelopment</a>{' '}
          <a href="#">#React</a>
        </p>
      </div>
    </article>
  )
}