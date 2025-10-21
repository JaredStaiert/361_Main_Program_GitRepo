import {AppShell, Burger, Button, Group, NavLink} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Link, Route, Routes} from "react-router";
import DashboardPage from "./dashboard/DashboardPage.tsx";
import BudgetPage from "./budget/BudgetPage.tsx";
import ImportPage from "./import/ImportPage.tsx";
import ToolPage from "./tool/ToolPage.tsx";
import FinancePage from "./finance/FinancePage.tsx";
import {hunterGreen} from "./theme.ts";

function App() {
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);

    return (
        <AppShell
            padding="md"
            header={{height: 60}}
            navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
            }}
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm"/>
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm"/>
                    The burger icon is always visible
                </Group>
            </AppShell.Header>
            <AppShell.Navbar
                bg={hunterGreen[9]}
            >
                <NavLink label="Dashboard" component={Link} to="/" />
                <NavLink label="Budget" component={Link} to="/budget" />
                <NavLink label="Import" component={Link} to="/import" />
                <NavLink label="Finance" component={Link} to="/finance" />
                <NavLink label="Tools" component={Link} to="/tools" />
                <Button color="indigoDye">Settings</Button>
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path="/" element={<DashboardPage/>} />
                    <Route path="/budget" element={<BudgetPage/>} />
                    <Route path="/import" element={<ImportPage/>} />
                    <Route path="/finance" element={<FinancePage/>} />
                    <Route path="/tools" element={<ToolPage/>} />
                    {/*<Route path="/login" element={<DashboardPage/>} />*/}
                </Routes>
            </AppShell.Main>
        </AppShell>
    );
}

export default App
