import type {JSX} from "react";
import {Card, Text} from "@mantine/core";
import type {OverviewCardProps} from "./Card.ts";

function OverviewCard(card: OverviewCardProps): JSX.Element {


    return (
        <>
            <Card>
                <Card.Section>
                    <Text>{card.title}</Text>
                </Card.Section>
            </Card>
        </>
    );
}

export default OverviewCard;