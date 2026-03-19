import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projets - Portfolio</title>
      </Helmet>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Projets</h1>
        <p className="text-muted-foreground">APPLICATION DE MAINTENANCE INFORMATIQUE</p>
      </div>
    </>
  );
}