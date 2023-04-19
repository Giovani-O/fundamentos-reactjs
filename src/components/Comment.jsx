import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/giovani-o.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Giovani de Oliveira</strong>

              <time 
                title="11 de Maio às 11:13" 
                dateTime="2022-05-11 08:13:30"
              >
                1h atrás
              </time>
            </div>

            <button title="Excluir comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Lorem ipsum dolor sit amet!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}