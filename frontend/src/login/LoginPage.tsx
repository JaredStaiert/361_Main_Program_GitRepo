import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../auth/useAuth.ts";
import {useLocation} from "react-router";

type LocationState = {
    from?: {
        pathname?: string;
    };
};

export default function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState | null;
    const returnTo = state?.from?.pathname ?? "/";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSubmitting(true);

        try {
            // auth.login is typed as synchronous in your provided context, but the provider's
            // implementation is async. We call it and await the returned promise (works at runtime).
            // If your TS config complains, ensure the provider cast (done there) or update the types.
            await auth.login({email, passwordHash: password});
            navigate(returnTo, {replace: true});
        } catch (err: any) {
            setError(err?.message ?? "Login failed");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div style={{maxWidth: 380, margin: "48px auto", padding: 20, border: "1px solid #eee", borderRadius: 8}}>
            <h2 style={{marginTop: 0}}>Sign in</h2>
            <form onSubmit={onSubmit}>
                <label style={{display: "block", marginBottom: 8}}>
                    <div style={{fontSize: 13, marginBottom: 6}}>Email</div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                        required
                        style={{width: "100%", padding: "8px 10px", boxSizing: "border-box"}}
                        disabled={submitting}
                    />
                </label>

                <label style={{display: "block", marginBottom: 12}}>
                    <div style={{fontSize: 13, marginBottom: 6}}>Password</div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        style={{width: "100%", padding: "8px 10px", boxSizing: "border-box"}}
                        disabled={submitting}
                    />
                </label>

                {error && (
                    <div style={{color: "crimson", marginBottom: 12, fontSize: 13}}>
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                    style={{
                        width: "100%",
                        padding: "10px 12px",
                        background: "#0366d6",
                        color: "white",
                        border: "none",
                        cursor: submitting ? "default" : "pointer",
                        opacity: submitting ? 0.7 : 1,
                        borderRadius: 4,
                    }}
                >
                    {submitting ? "Signing in..." : "Sign in"}
                </button>
            </form>
        </div>
    );
}