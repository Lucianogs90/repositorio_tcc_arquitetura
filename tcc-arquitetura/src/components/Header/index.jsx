import Image from "next/image";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src="/img/logo-ifro.svg"
          alt="Logotipo do IFRO Vilhena"
          width="79"
          height="112"
        />
      </div>

      <div>Repositório de TCC do Bacharelado de Arquitetura e Urbanismo</div>
    </header>
  );
}
