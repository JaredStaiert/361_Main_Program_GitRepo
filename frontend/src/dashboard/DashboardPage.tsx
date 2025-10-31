import {Button, Stack} from "@mantine/core";
import OverviewCard from "../components/OverviewCard.tsx";
import ToolWidgetCard from "../components/ToolWidgetCard.tsx";
import type {ToolWidgetTool} from "../components/Card.ts";

function DashboardPage() {
    const toolArray: ToolWidgetTool[] = [
        {
            id: "Simple",
            type: "Simple",
        },
        {
            id: "Interest",
            type: "Interest",
        }
    ]

    return (
        <>
            <Stack>
                <OverviewCard components={[]} pageLink={""} {...{title: "Budget Summary"}}/>
                <OverviewCard components={[]} pageLink={""} {...{title: "Finance Overview"}}/>
                <ToolWidgetCard widgets={toolArray}></ToolWidgetCard>
            </Stack>
        </>
    );
}

export default DashboardPage;