import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Portfolio</title>
      </Helmet>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-muted-foreground">Email: f.ouariba5331@uca.ac.ma</p>
      </div>
    </>
  );
}