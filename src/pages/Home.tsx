import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";
console.log("Alias fonctionne!");

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil - Portfolio</title>
      </Helmet>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-red-500">Page d'accueil</h1>
        <p className="text-muted-foreground">Bienvenue sur mon portfolio</p>
        <div className="p-4 bg-blue-500 text-white rounded-lg">
          je suis OUARIBA FATIMA ZAHRA
        </div>
      </div>
    </>
  );
}