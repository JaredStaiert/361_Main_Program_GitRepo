import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.tsx"
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css"
import {BrowserRouter} from "react-router";
import {mantineTheme} from "./theme.ts";
import AuthProvider from "./auth/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={mantineTheme}>
            <BrowserRouter>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </BrowserRouter>
        </MantineProvider>
    </StrictMode>,
)
