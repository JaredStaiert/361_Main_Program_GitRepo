import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import App from "./App.tsx"
import {MantineProvider} from "@mantine/core";
import "@mantine/core/styles.css"
import {BrowserRouter} from "react-router";
import {mantineTheme} from "./theme.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={mantineTheme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MantineProvider>
    </StrictMode>,
)
