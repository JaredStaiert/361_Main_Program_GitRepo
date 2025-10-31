import {Button, Group, Stack, Title} from "@mantine/core";
import OverviewCard, {type OverviewCardProps} from "../components/OverviewCard.tsx";
import ToolWidgetCard from "../components/ToolWidgetCard.tsx";
import {type ToolWidgetDesc} from "../components/Card.ts";

function DashboardPage() {
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
        pageLink: "page link here"
    }

    const financeProps: OverviewCardProps = {
        title: "Finance Overview",
        components: [],
        pageLink: "page link here"
    }

    return (
        <>
            <Stack>
                <Group justify={"space-between"}>
                    <Title order={1}>Dashboard</Title>
                    <Button color={"veridian"}>Change View</Button>
                </Group>
                <OverviewCard key={crypto.randomUUID()} {...budgetProps} />
                <OverviewCard key={crypto.randomUUID()} {...financeProps} />
                <ToolWidgetCard widgets={toolArray}></ToolWidgetCard>
            </Stack>
        </>
    );
}

export default DashboardPage;