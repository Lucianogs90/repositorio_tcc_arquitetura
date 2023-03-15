import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export default function PreviewPDF() {

  const router = useRouter();
  const { id } = router.query;

  const [publicacao, setPublicacao] = useState({});

  useEffect(() => {
    axios.get(`/api/publicacoes/${id}`).then((resposta) => {
      setPublicacao(resposta.data);
    });
  }, [router]);

  return (
    < >
      <p>{publicacao.titulo}</p>
      <p>{publicacao.autor}</p>
      <p>{publicacao.orientador}</p>
      <iframe src={publicacao.arquivo} className={styles.pdf} />
    </>
  );
}
