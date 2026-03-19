import { Helmet } from "react-helmet-async";

export default function Certifications() {
  return (
    <>
      <Helmet>
        <title>Certifications - Portfolio</title>
      </Helmet>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Certifications</h1>
        <p className="text-muted-foreground">Hibernate&JPA</p>
      </div>
    </>
  );
}