import styles from './Sidebar.module.css';
import { MoonStars, PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={ styles.sidebar }>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
    
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/50748653?v=4" />

        <strong>Giovani de Oliveira</strong>
        <span>Web Developer</span>
      </div>

      <div class={styles.themes}>
        <button>
          <MoonStars size={24}/>
          <span>Tema escuro</span>
        </button>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}