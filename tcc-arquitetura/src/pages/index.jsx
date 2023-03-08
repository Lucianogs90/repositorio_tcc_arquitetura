import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      
      Página Inicial
      <Link href="/visualizar">Visualizar</Link>
    </>
  );
}
