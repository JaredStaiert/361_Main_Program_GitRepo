import {AppShell, Burger, Group, NavLink, Stack} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {Link, Route, Routes} from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage.tsx";
import BudgetPage from "./budget/BudgetPage.tsx";
import ImportPage from "./import/ImportPage.tsx";
import ToolPage from "./tool/ToolPage.tsx";
import FinancePage from "./finance/FinancePage.tsx";
import {useState} from "react";
import {jetGrey} from "./globalColors.ts";
import GlobalSettingsModal from "./components/modals/GlobalSettingsModal.tsx";
import LoginPage from "./login/LoginPage.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";

function App() {
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(false);
    const [active, setActive] = useState(0);

    const navLinks = [
        {label: "Dashboard", to: "/"},
        {label: "Budget", to: "/budget"},
        {label: "Import", to: "/import"},
        {label: "Finance", to: "/finance"},
        {label: "Tools", to: "/tools"}
    ];

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
            <AppShell.Header
                bg={jetGrey[8]}
            >
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm"/>
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm"/>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar
                bg={"jetGrey"}
                w="10em"
            >
                <Stack>
                    {navLinks.map((element, index) => (
                        <NavLink
                            key={`${element.label}_${index}`}
                            active={index === active}
                            label={element.label}
                            component={Link}
                            to={element.to}
                            color={"redWood"}
                            variant={"filled"}
                            autoContrast
                            onClick={() => setActive(index)}
                        ></NavLink>
                    ))}
                    <GlobalSettingsModal/>

                </Stack>
            </AppShell.Navbar>
            <AppShell.Main>
                <Routes>
                    <Route path={"/login"} element={<LoginPage />}/>
                    <Route path="/*" element={<ProtectedRoute/>}>
                        <Route index element={<DashboardPage/>}/>
                        <Route path="budget" element={<BudgetPage/>}/>
                        <Route path="import" element={<ImportPage/>}/>
                        <Route path="finance" element={<FinancePage/>}/>
                        <Route path="tools" element={<ToolPage/>}/>
                    </Route>
                </Routes>
            </AppShell.Main>

        </AppShell>
    );
}

export default App
