import {type JSX, useState} from "react";
import {Button, Checkbox, Group, Modal, Stack, Text} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import type {OverviewCardProps} from "../OverviewCard.tsx";

function DashboardEditViewModal({ setOverviewCards }): JSX.Element {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Edit View">
                <DashboardEditViewContent setOverviewCards={setOverviewCards}/>
            </Modal>

            <Button onClick={open} color={"veridian"}>Change View</Button>
        </>
    );
}

function DashboardEditViewContent({ setOverviewCards }): JSX.Element {
    const [budgetSummary, setBudgetSummary] = useState<boolean>(true);
    const [financeOverview, setFinanceOverview] = useState<boolean>(true);
    const [toolWidget, setToolWidget] = useState<boolean>(true);

    const updateDisplay = () => {
        const newOverviewArray: OverviewCardProps[] = [];

        if (budgetSummary) {
            newOverviewArray.push(
                {title: "Budget Overview",
                components: [{id: crypto.randomUUID(), type: "TreeMap"}],
                pageLink: "page link here"
                });
        }

        if (financeOverview) {
            newOverviewArray.push({
                title: "Finance Overview",
                components: [{id: crypto.randomUUID(), type: "StockTable"}],
                pageLink: "page link here"
            })
        }
        setOverviewCards(newOverviewArray);
    };

    const setDefault = () => {
        setBudgetSummary(true);
        setFinanceOverview(true);
        updateDisplay();
    }

    return (
        <>
            <Stack align="stretch">
                <Text>Features</Text>

                <Checkbox
                    label="budget summary"
                    checked={budgetSummary}
                    onChange={(e) => setBudgetSummary(e.currentTarget.checked)}
                    aria-label="budget summary"
                />

                <Checkbox
                    label="finance overview"
                    checked={financeOverview}
                    onChange={(e) => setFinanceOverview(e.currentTarget.checked)}
                    aria-label="finacne overview"
                />

                <Checkbox
                    label="tool widget"
                    checked={toolWidget}
                    onChange={(e) => setToolWidget(e.currentTarget.checked)}
                    aria-label="tool widget"
                />
            </Stack>
            <Group justify={"space-between"}>
                <Button onClick={() => {setDefault();}}>Default</Button>
                <Button onClick={() => {updateDisplay();}}>Save</Button>
            </Group>
        </>
    );
}

export default DashboardEditViewModal;