import '../styles/content.scss';

interface IContainerProps {
  children: JSX.Element[];
  title: string;
}

export function Content(props: IContainerProps) {

    return(
      <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
      </header>
    
      <main>
        <div className="movies-list">
          {props.children}
        </div>
      </main>
    </div>
    )
}