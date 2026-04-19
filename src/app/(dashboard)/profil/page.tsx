"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilPage() {
  const router = useRouter();
  
  const filieresData: Record<string, string[]> = {
    "ENAM": ["AG (Administration Générale)", "STID (Statistique)", "AF (Administration des Finances)", "SG (Secrétariat de Gestion)", "Sciences de l'Information Documentaire"],
    "FASEG": ["Comptabilité", "Économie", "Gestion des Entreprises", "Audit et Contrôle"],
    "FLASH": ["Lettres Modernes", "Anglais", "Géographie", "Histoire"],
    "AUTRE": ["Autre filière"]
  };

  const [user, setUser] = useState({
    nom: "emrissoglo",
    email: "emrissoglo@gmail.com",
    tel: "0157234689",
    statut: "Étudiant ENAM",
    ecole: "ENAM",
    filiere: "Sciences de l'Information Documentaire"
  });

  const [selectedEcole, setSelectedEcole] = useState(user.ecole);

  const handleLogout = () => {
    // Ici tu ajouteras la logique de suppression de session/token plus tard
    router.push('/login');
  };

  const historique = [
    { date: "19/04/2026", motif: "Consultation en ligne", arrivee: "22:36", depart: "22:41", satisfaction: "—" },
    { date: "18/04/2026", motif: "Étude", arrivee: "15:40", depart: "15:41", satisfaction: "—" },
  ];

  return (
    <div className="profil-container">
      <h1 className="page-title">Mon Profil</h1>

      <div className="profile-card">
        <div className="profile-header-info">
          <div className="avatar-circle">{user.nom.charAt(0)}</div>
          <div>
            <h3>{user.nom}</h3>
            <p className="user-email">{user.email}</p>
          </div>
        </div>

        <form className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>Téléphone</label>
              <input type="text" defaultValue={user.tel} />
            </div>
            <div className="form-group">
              <label>Établissement / École</label>
              <select 
                value={selectedEcole} 
                onChange={(e) => setSelectedEcole(e.target.value)}
              >
                <option value="ENAM">ENAM</option>
                <option value="FASEG">FASEG</option>
                <option value="FLASH">FLASH</option>
                <option value="AUTRE">Autre Faculté / École</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Filière</label>
              <select defaultValue={user.filiere} disabled={!selectedEcole}>
                {selectedEcole && filieresData[selectedEcole].map((filiere) => (
                  <option key={filiere} value={filiere}>
                    {filiere}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn-update">Mettre à jour</button>
        </form>
      </div>

      <div className="history-card">
        <div className="history-header">
          <h3>Historique des visites</h3>
          <span className="visit-count">8 visites ce mois</span>
        </div>

        <div className="table-responsive">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Motif</th>
                <th>Arrivée</th>
                <th>Départ</th>
                <th>Satisfaction</th>
              </tr>
            </thead>
            <tbody>
              {historique.map((visite, index) => (
                <tr key={index}>
                  <td>{visite.date}</td>
                  <td>{visite.motif}</td>
                  <td>{visite.arrivee}</td>
                  <td>{visite.depart}</td>
                  <td>{visite.satisfaction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* BOUTON DE DÉCONNEXION */}
      <div className="logout-section">
        <button onClick={handleLogout} className="btn-logout">
          <i className="fa-solid fa-right-from-bracket"></i> Se déconnecter
        </button>
      </div>
    </div>
  );
}