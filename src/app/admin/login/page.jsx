import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { isAuthenticated, isAdminConfigured } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (!isAdminConfigured()) {
    return (
      <div className="admin-login">
        <div className="admin-login-card">
          <h1>Admin not configured</h1>
          <p>
            Set <code>ADMIN_PASSWORD</code> in <code>.env.local</code> to enable the
            panel. The template is <code>.env.example</code>.
          </p>
        </div>
      </div>
    );
  }

  if (isAuthenticated(await cookies())) redirect("/admin");

  return (
    <div className="admin-login">
      <div className="admin-login-card">
        <h1>AiLogiQs Admin</h1>
        <p>Sign in to manage blog posts.</p>
        <LoginForm />
      </div>
    </div>
  );
}