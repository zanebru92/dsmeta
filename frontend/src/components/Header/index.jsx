import logo from "../../assets/img/logo.svg";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="#">@devsuperior</a> e recriado por @zanebru92
        </p>
      </div>
    </header>
  );
}
