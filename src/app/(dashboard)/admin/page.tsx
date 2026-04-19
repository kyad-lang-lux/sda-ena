export default function AdminPage() {
  return (
    <div className="admin-view">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Usagers</h3>
          <p className="stat-number">1,248</p>
          <span className="stat-label">+12 ce mois</span>
        </div>
        <div className="stat-card">
          <h3>Documents</h3>
          <p className="stat-number">3,500</p>
          <span className="stat-label">Mémoires & Revues</span>
        </div>
        <div className="stat-card">
          <h3>Visites du jour</h3>
          <p className="stat-number">45</p>
          <span className="stat-label">Enregistrements salle</span>
        </div>
      </div>

      <div className="users-section">
        <h3>Derniers usagers enregistrés</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Filière</th>
              <th>Dernière visite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emris Soglo</td>
              <td>Sciences de l'Information</td>
              <td>Aujourd'hui, 14:20</td>
            </tr>
            {/* ... d'autres lignes */}
          </tbody>
        </table>
      </div>
    </div>
  );
}