import React from 'react';

export default function DashboardHome() {
  // Ces données viendront de ton authentification plus tard
  const user = {
    nom: "emrissoglo",
    sexe: "Homme",
    statut: "Étudiant ENAM",
    tel: "0157234689",
    filiere: "Sciences de l'Information Documentaire"
  };

  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Enregistrement à la salle</h1>
        <p>Votre profil est pré-rempli automatiquement.</p>
      </header>

      <div className="registration-card">
        {/* Badge des informations utilisateur */}
        <div className="user-info-badge">
          <p className="badge-title">VOS INFORMATIONS (DEPUIS VOTRE PROFIL)</p>
          <div className="info-grid">
            <div className="info-item"><span>Nom :</span> <strong>{user.nom}</strong></div>
            <div className="info-item"><span>Sexe :</span> <strong>{user.sexe}</strong></div>
            <div className="info-item"><span>Statut :</span> <strong>{user.statut}</strong></div>
            <div className="info-item"><span>Tél :</span> <strong>{user.tel}</strong></div>
            <div className="info-item-full"><span>Filière :</span> <strong>{user.filiere}</strong></div>
          </div>
        </div>

        {/* Formulaire de visite */}
        <form className="visit-form">
          <div className="form-group">
            <label htmlFor="motif">Motif de visite <span className="required">*</span></label>
            <select id="motif" required>
              <option value="">Sélectionnez votre motif</option>
              <option value="recherche">Recherche documentaire</option>
              <option value="depot">Dépôt de mémoire</option>
              <option value="lecture">Lecture simple</option>
              <option value="internet">Consultation internet</option>
            </select>
          </div>

          <button type="submit" className="btn-register-visit">
            Enregistrer mon arrivée
          </button>
        </form>
      </div>
    </div>
  );
}