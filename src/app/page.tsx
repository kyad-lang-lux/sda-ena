import Link from "next/link";

export default function Home() {
  return (
    <div className="home-wrapper">
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            {" "}
          Bibliothèque de  l'Ecole <br /> Nationale
            d'Administration.
          </h1>
          <p className="hero-description">
            Explorez notre catalogue exhaustif, gérez vos recherches en un clic.
            Une plateforme unique pour s'inscrire, consulter les bases de
            données académiques et accéder à l'excellence documentaire de
            l'ENAM.
          </p>

          <div className="link">
            {/* Lien pour le catalogue (Consultation des ouvrages) */}
            <Link href="/login" className="btn-main">
              <i className="fa-solid fa-book-bookmark"></i>
              Catalogue
            </Link>

            {/* Lien pour l'enregistrement (Arrivée à la salle) */}
            <Link href="/login" className="btn-main btn-second">
              {/* <i className="fa-solid fa-user"></i>  */}
              Enregistrement
            </Link>
          </div>
        </div>
      </header>

      {/* SECTION VISUELLE INTERACTIVE (APRES LE HERO) */}
      <section className="interactive-feature-wrapper">
        <div className="visual-stage">
          {/* Conteneur principal de l'image */}
          <div className="main-image-container">
            <img
              src="/img/img1.jpeg"
              alt="SDA ENAM Interface"
              className="featured-display-img"
            />

            {/* Barre de recherche flottante */}
            <div className="floating-search-overlay">
              <div className="search-pill">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className="typing-placeholder">
                  Rechercher des archives...
                </span>
              </div>
            </div>

            {/* Carte flottante Gauche */}
            <div className="floating-box box-left">
              <div className="box-icon green">
                <i className="fa-solid fa-book-bookmark"></i>
              </div>
              <div className="box-content">
                <h4>Ressources</h4>
              </div>
            </div>

            {/* Carte flottante Droite */}
            <div className="floating-box box-right">
              <div className="box-header">
                <span className="new-tag">Nouveautés</span>
              </div>
              <h4>Derniers Mémoires</h4>
              <div className="avatar-group-mini">
                <div className="mini-user">D</div>
                <div className="mini-user">A</div>
                <div className="mini-user">+5</div>
              </div>
            </div>
          </div>

          {/* Courbe décorative */}
          <svg className="bg-curve-decoration" viewBox="0 0 500 500">
            <path
              d="M0,100 C150,200 350,0 500,100"
              fill="none"
              stroke="#1a5d2b"
              strokeWidth="2"
              strokeOpacity=".8"
            />
          </svg>
        </div>
      </section>


         
<section className="resources-container">
  <div className="resources-grid">
    
    {/* Carte 1 - Cairn.info */}
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/cairn.png" alt="Cairn.info" className="resource-thumb" />
        </div>
        <h3>Cairn.info</h3>
      </div>
      <p className="resource-desc">
        Portail francophone de référence donnant accès à plus de 600 revues et 21 000 ouvrages en sciences humaines et sociales.
      </p>
      <a href="https://shs.cairn.info/" target="_blank" rel="noopener noreferrer" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>

    {/* Carte 2 - DICAMES */}
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/dicarmes.png" alt="DICAMES" className="resource-thumb" />
        </div>
        <h3>DICAMES — Archive scientifique</h3>
      </div>
      <p className="resource-desc">
        Archive numérique institutionnelle du CAMES. Diffuse en accès libre la production scientifique des universités africaines.
      </p>
      <a href="https://dicames.online/" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>

   
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/schoolar.jpg" alt="Google Scholar" className="resource-thumb" />
        </div>
        <h3>Google Scholar</h3>
      </div>
      <p className="resource-desc">
        Moteur de recherche académique mondial. Permet de trouver articles, thèses, livres et brevets dans toutes les disciplines.
      </p>
      <a href="https://scholar.google.com" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>

    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/persee.png" alt="Google Scholar" className="resource-thumb" />
        </div>
        <h3>Persée</h3>
      </div>
      <p className="resource-desc">
      Archives numériques de revues scientifiques françaises en sciences humaines et sociales, en accès entièrement gratuit.
      </p>
      <a href="https://www.persee.fr/" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>

    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/gouv.jpg" alt="Google Scholar" className="resource-thumb" />
        </div>
        <h3>LEGIS</h3>
      </div>
      <p className="resource-desc">
      Base de données officielle des textes de loi de la République du Bénin, mise en œuvre par le Ministère 
      de la Justice. Accès libre aux normes juridiques en vigueur.
      </p>
      <a href="https://legis.cdij.bj/" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>


  
    <div className="resource-card">
      <div className="resource-header">
        <div className="resource-img-container">
          <img src="/img/gouv.jpg" alt="Google Scholar" className="resource-thumb" />
        </div>
        <h3>SGG — Secrétariat Général du Gouvernement</h3>
      </div>
      <p className="resource-desc">
      Plateforme officielle de publication des décrets, lois promulguées, 
      ordonnances et comptes rendus du Conseil des Ministres du Bénin.
      </p>
      <a href="https://sgg.gouv.bj/" className="resource-link">
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
        <span>Accéder</span>
      </a>
    </div>


  
   
  </div>
</section>




      <main className="content-container">
        <section className="info-card">
          <h3>
            <i className="fa-solid fa-circle-info"></i> À propos du SDA
          </h3>
          <p>
            Le Service de la Documentation et des Archives (SDA) de l'ENAM met à
            votre disposition un fonds documentaire riche :
            <strong>
              {" "}
              mémoires, monographies, revues et ressources numériques en ligne.
            </strong>
            Ouvert aux étudiants, enseignants, chercheurs et visiteurs.
          </p>
        </section>
      </main>
      <div className="info-grid">
        {/* Carte Horaires */}
        <section className="info-card">
          <h3>
            <i className="fa-regular fa-clock"></i> Horaires d'ouverture
          </h3>
          <ul className="list-info">
            <li>
              <span>Lundi – Vendredi</span>
              <strong className="time-highlight">9h00 – 18h30</strong>
            </li>
            <li>
              <span>Samedi</span>
              <span className="status-closed">Fermé</span>
            </li>
            <li>
              <span>Dimanche</span>
              <span className="status-closed">Fermé</span>
            </li>
          </ul>
        </section>

        {/* Carte Contacts */}
        <section className="info-card">
          <h3>
            <i className="fa-solid fa-phone"></i> Contacts
          </h3>
          <ul className="list-info-contacts">
            <li>
              <i className="fa-solid fa-location-dot icon-green"></i>
              <span>ENAM, Abomey-Calavi, Bénin</span>
            </li>
            <li>
              <i className="fa-brands fa-whatsapp icon-green"></i>
              <span>
                WhatsApp : <strong>+229 99 90 14 93</strong>
              </span>
            </li>
            <li>
              <i className="fa-regular fa-envelope icon-green"></i>
              <span className="email-text">
                enambeninbibliotheque@gmail.com
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
