import {type PropsWithChildren, useEffect, useState} from "react";
import {AuthContext, type Credentials, type User} from "./useAuth.ts";


function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const res = await fetch(`http://localhost:8080/users/testAuth`, {
                    method: "POST",
                    credentials: "include",
                    signal: controller.signal,
                    headers: { Accept: "application/json" },
                });
                if (!res.ok) {
                    setUser(null);
                    return;
                }
                const data = await res.json();
                setUser(data.user ?? null);
            } catch (err: any) {
                if (err.name === "AbortError") return;
                setUser(null);
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, []);


    const login = async (creds: Credentials) => {
        const res = await fetch("http://localhost:8080/users/testAuth", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email: creds.email, passwordHash: creds.passwordHash}),
        });
        if (!res.ok) throw new Error("Login failed");
        const data = await res.json();
        if (data) {
            setUser({email: data.email, passwordHash: data.passwordHash});
            console.log(user);
        } else {
            setUser(null);
        }

    };

    const logout = () => {
        setUser(null);
    };

    return (
        <>
            <AuthContext.Provider value={{user, login, logout}}>
                {!loading && children}
            </AuthContext.Provider>
        </>
    );
}

export default AuthProvider
