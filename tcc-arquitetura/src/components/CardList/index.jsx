import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

export default function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/api/publicacoes";

    axios.get(url).then((resposta) => {
      setCards(resposta.data);
    });
  }, []);

  return (
    <div className={styles.card_list}>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          titulo={card.titulo}
          autor={card.autor}
          orientador={card.orientador}
          capa={card.capa}
        />
      ))}
    </div>
  );
}
