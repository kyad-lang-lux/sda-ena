"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  // Liste des filières par établissement
  const filieresData: Record<string, string[]> = {
    "ENAM": ["AG (Administration Générale)", "STID (Statistique)", "AF (Administration des Finances)", "SG (Secrétariat de Gestion)"],
    "FASEG": ["Comptabilité", "Économie", "Gestion des Entreprises", "Audit et Contrôle"],
    "FLASH": ["Lettres Modernes", "Anglais", "Géographie", "Histoire"],
    "AUTRE": ["Autre filière"]
  };

  const [selectedEcole, setSelectedEcole] = useState("");

  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <i className="fa-solid fa-user-plus"></i>
          <h1>Créer un compte</h1>
          <p>Rejoignez la plateforme documentaire du SDA</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label><i className="fa-solid fa-user"></i> Nom complet</label>
            <input type="text" placeholder="Ex: Emris Soglo" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Sexe</label>
              <select required>
                <option value="">Choisir...</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
              </select>
            </div>
            <div className="form-group">
              <label>Téléphone</label>
              <input type="tel" placeholder="99 00 00 00" />
            </div>
          </div>

          {/* Étape 1 : Choisir l'École */}
          <div className="form-group">
            <label><i className="fa-solid fa-university"></i> Établissement / École</label>
            <select 
              required 
              value={selectedEcole} 
              onChange={(e) => setSelectedEcole(e.target.value)}
            >
              <option value="">Sélectionnez votre école...</option>
              <option value="ENAM">ENAM</option>
              <option value="FASEG">FASEG</option>
              <option value="FLASH">FLASH</option>
              <option value="AUTRE">Autre Faculté / École</option>
            </select>
          </div>

          {/* Étape 2 : La Filière (Dynamique) */}
          <div className="form-group">
            <label><i className="fa-solid fa-book"></i> Filière</label>
            <select required disabled={!selectedEcole}>
              <option value="">
                {selectedEcole ? "Choisissez votre filière..." : "Sélectionnez d'abord l'école"}
              </option>
              {selectedEcole && filieresData[selectedEcole].map((filiere) => (
                <option key={filiere} value={filiere}>
                  {filiere}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label><i className="fa-solid fa-envelope"></i> Email</label>
            <input type="email" placeholder="votre@email.com" required />
          </div>

          <div className="form-group">
            <label><i className="fa-solid fa-lock"></i> Mot de passe</label>
            <input type="password" required />
          </div>

          <button type="submit" className="btn-auth">S'inscrire</button>
        </form>

        <p className="auth-footer">
          Déjà inscrit ? <Link href="/login">Connectez-vous ici</Link>
        </p>
      </div>
    </main>
  );
}