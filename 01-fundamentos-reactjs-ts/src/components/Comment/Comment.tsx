import styles from './Comment.module.css'

import { HandsClapping, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'

interface CommentsProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentsProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log('delete comment')

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        src="https://github.com/diego3g.png" 
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Diego Fernandes</strong>
            <time 
              title="29 de junho às 11:14h" 
              dateTime="2022-06-29 11:14:30"
            > Cerda de 1h 
            </time>
          </div>

          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>

          <p>{content}</p>
      </div>

      <footer>
        <button onClick={handleLikeComment}>
        <HandsClapping />
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>

      </div>
    </div>
  )
}