
import '../styles/sidebar.scss';

interface ISideBar {
  children: JSX.Element[];
}


export function SideBar(props: ISideBar) {
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {props.children}
    </div>

  </nav>
  )
}