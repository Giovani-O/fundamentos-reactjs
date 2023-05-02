import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [ comments, setComments ] = useState( [
    'Lorem ipsum dolor sit amet',
  ] );

  const [newCommentText, setNewCommentText] = useState('');

  const publicationDateFormatted = format(
    publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR }
  );

  const publicationDateRelativeToNow = formatDistanceToNow(
    publishedAt, { locale: ptBR , addSuffix: true }
  );

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewInvalidComment() {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete) {
    // Imutabilidade: Nunca alterar o valor de uma propriedade diretamente
    const updatedCommentsList = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(updatedCommentsList);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={ styles.post }>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publicationDateFormatted} dateTime={publishedAt.toISOString()}>
          { publicationDateRelativeToNow }
        </time>
      </header>

      <div className={styles.content}>
        { content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }
          else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewInvalidComment}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          );
        }) }
      </div>
    </article>
  )
}