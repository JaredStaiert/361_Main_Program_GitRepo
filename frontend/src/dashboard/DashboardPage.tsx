import {Stack} from "@mantine/core";
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

    return (
        <>
            <Stack>
                <OverviewCard key={crypto.randomUUID()} {...budgetProps} />
                <OverviewCard components={[]} pageLink={""} {...{title: "Finance Overview"}}/>
                <ToolWidgetCard widgets={toolArray}></ToolWidgetCard>
            </Stack>
        </>
    );
}

export default DashboardPage;