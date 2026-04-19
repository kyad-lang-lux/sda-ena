// src/app/login/page.tsx
import Link from "next/link";

export default function Login() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <i className="fa-solid fa-right-to-bracket"></i>
          <h1>Connexion</h1>
          <p>Accédez à votre espace personnel</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label><i className="fa-solid fa-envelope"></i> Email</label>
            <input type="email" placeholder="votre@email.com" required />
          </div>

          <div className="form-group">
            <label><i className="fa-solid fa-lock"></i> Mot de passe</label>
            <input type="password" required />
          </div>

          <button type="submit" className="btn-auth">Se connecter</button>
        </form>

        <p className="auth-footer">
          Nouveau ici ? <Link href="/register">Créer un compte</Link>
        </p>
      </div>
    </main>
  );
}