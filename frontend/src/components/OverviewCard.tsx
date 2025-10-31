import type {JSX} from "react";
import {Button, Card, Text} from "@mantine/core";
import type {OverviewCardProps} from "./Card.ts";

function OverviewCard(card: OverviewCardProps): JSX.Element {


    return (
        <>
            <Card radius={"md"}>
                <Card.Section>
                    <Text>{card.title}</Text>
                </Card.Section>
                <Card.Section>
                    <Button>{"View " + card.title.split(" ")[0]}</Button>
                </Card.Section>
            </Card>
        </>
    );
}

export default OverviewCard;