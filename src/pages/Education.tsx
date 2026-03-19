import { Helmet } from "react-helmet-async";

export default function Education() {
  return (
    <>
      <Helmet>
        <title>Formations - Portfolio</title>
      </Helmet>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Formations</h1>
        <p className="text-muted-foreground">Deust-MIPC en FSTG</p>
        <p className="text-muted-foreground">Licence en INFORMATIQUE</p>

      </div>
    </>
  );
}