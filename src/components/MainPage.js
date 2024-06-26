import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InstagramIcon } from "../icons/InstagramIcon";
import { TwitchIcon } from "../icons/TwitchIcon";
export default function MainPage() {
  const navigate = useNavigate();
  const userRef = useRef(null);
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (!userRef.current) throw new Error("Missing username input element");
    const username = userRef.current.value.trim();
    if (username === "") {
      alert("Inserisci il tuo nickname su twitch per continuare!");
      return;
    }
    navigate("/quiz", {
      state: username,
    });
  };
  return (
    <main className="page">
      <h2>Regole der Quizzettone</h2>
      <ul className="list">
        <ListItem>
          <span>1)</span> Segui il{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitch.tv/erchiunque"
          >
            nostro canale Twitch <TwitchIcon />
          </a>
        </ListItem>
        <ListItem>
          <span>2)</span> Seguici su{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/erchiunque/"
          >
            Instagram! <InstagramIcon />
          </a>
        </ListItem>
        <ListItem>
          <span>3)</span>
          Scrivi un messaggio nella chat della live
        </ListItem>
        <ListItem>
          <span>4)</span>
          Utilizza come Username lo stesso nickname che hai su Twitch
        </ListItem>
        <ListItem>
          <span>5)</span>
          Sbrigati! Hai solo 60 secondi!
        </ListItem>
      </ul>
      <div className="prize">
        <div>PREMIO</div>
        5€ in Gift Card Amazon!
      </div>
      <div>In bocca al lupo!</div>
      <form onSubmit={handleUsernameSubmit} className="form">
        <input
          ref={userRef}
          type="text"
          placeholder="Username"
          className="default_input"
        />
        <button type="submit" className="default_btn">
          Start Quiz
        </button>
      </form>
    </main>
  );
}

function ListItem({ children }) {
  return <li className="li_item">{children}</li>;
}
