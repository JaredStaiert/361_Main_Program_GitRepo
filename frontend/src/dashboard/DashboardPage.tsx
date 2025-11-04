import {Group, Stack, Title} from "@mantine/core";
import OverviewCard, {type OverviewCardProps} from "../components/OverviewCard.tsx";
import ToolWidgetCard from "../components/ToolWidgetCard.tsx";
import {type ToolWidgetDesc} from "../components/Card.ts";
import DashboardEditViewModal from "../components/modals/DashboardEditViewModal.tsx";
import DashboardExplanationCard from "../components/cards/DashboardExplanationCard.tsx";
import {useState} from "react";
import FirstTimeBudgetCard from "../components/cards/FirstTimeBudgetCard.tsx";

function DashboardPage() {
    // TODO: Refactor tool widgets to be more modular along with other mapping

    const toolArray: ToolWidgetDesc[] = [
        {
            id: "Simple",
            type: "Simple",
        },
        {
            id: "Interest",
            type: "Interest",
        }
    ]

    const budgetProps: OverviewCardProps = {
        title: "Budget Overview",
        components: [{id: crypto.randomUUID(), type: "TreeMap"}],
        pageLink: "/budget"
    }

    const financeProps: OverviewCardProps = {
        title: "Finance Overview",
        components: [{id: crypto.randomUUID(), type: "StockTable"}],
        pageLink: "/finance"
    }
    const [overviewCards, setOverviewCards] =
        useState<OverviewCardProps[]>([budgetProps, financeProps]);

    return (
        <>
            <Stack>
                <Group justify={"space-between"}>
                    <Title order={1}>Dashboard</Title>
                    <DashboardEditViewModal setOverviewCards={setOverviewCards}/>
                </Group>
                <FirstTimeBudgetCard/>
                <DashboardExplanationCard/>
                {overviewCards.map((props) => (
                    <OverviewCard key={crypto.randomUUID()} {...props} />
                ))}
                {/*<OverviewCard key={crypto.randomUUID()} {...budgetProps} />*/}
                {/*<OverviewCard key={crypto.randomUUID()} {...financeProps} />*/}
                <ToolWidgetCard widgets={toolArray}></ToolWidgetCard>
            </Stack>
        </>
    );
}

export default DashboardPage;