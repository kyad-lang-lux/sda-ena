import Link from "next/link";

export default function Home() {
  return (
    <div className="home-wrapper">
      <header className="hero-section">
        <div className="hero-content">
         <h1>Bienvenue à la Bibliothèque du SDA</h1>
          <p className="hero-description">
            Accédez au catalogue documentaire, enregistrez vos visites et déposez vos mémoires en ligne.
          </p>
          
         <div className="link">
  {/* Lien pour l'enregistrement (Arrivée à la salle) */}
  <Link href="/login" className="btn-main">
    <i className="fa-solid fa-user-check"></i> Enregistrement
  </Link>

  {/* Lien pour le catalogue (Consultation des ouvrages) */}
  <Link href="/login" className="btn-main">
    <i className="fa-solid fa-book-bookmark"></i> Catalogue
  </Link>
</div>

        </div>
      </header>
      <br /> <br />

      <main className="content-container">
        <section className="info-card">
          <h3><i className="fa-solid fa-circle-info"></i> À propos du SDA</h3>
          <p>
            Le Service de la Documentation et des Archives (SDA) de l'ENAM met à votre disposition un fonds documentaire riche : 
            <strong> mémoires, monographies, revues et ressources numériques en ligne.</strong> 
            Ouvert aux étudiants, enseignants, chercheurs et visiteurs.
          </p>
        </section>

        <div className="info-grid">
          <section className="info-card">
            <h3><i className="fa-regular fa-clock"></i> Horaires d'ouverture</h3>
            <ul className="list-info">
              <li><span>Lundi – Vendredi</span> <strong>9h00 – 18h30</strong></li>
              <li><span>Samedi</span> <span className="closed">Fermé</span></li>
              <li><span>Dimanche</span> <span className="closed">Fermé</span></li>
            </ul>
          </section>

          <section className="info-card">
            <h3><i className="fa-solid fa-envelope"></i> Contacts</h3>
            <ul className="list-info">
              <li><span><i className="fa-solid fa-location-dot"></i> Localisation</span> <strong>Abomey-Calavi</strong></li>
              <li><span><i className="fa-brands fa-whatsapp"></i> WhatsApp</span> <strong className="link-green">+229 99 90 14 93</strong></li>
              <li><span><i className="fa-regular fa-envelope"></i> Email</span> <strong>enam@gmail.com</strong></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}