import type {JSX} from "react";
import {Button, Card, Text} from "@mantine/core";
import {type OverviewCompDesc, OverviewComponents} from "./Card.ts";

export interface OverviewCardProps {
    title: string;
    components: OverviewCompDesc[];
    pageLink: string;
}

function OverviewCard(props: OverviewCardProps): JSX.Element {


    return (
        <>
            <Card radius={"md"}>
                <Card.Section>
                    <Text>{props.title}</Text>
                </Card.Section>
                <Card.Section>
                    {props.components.map((c) => {
                        const Comp = OverviewComponents[c.type];
                        return (<Comp key={c.id}/>)
                    })}
                </Card.Section>
                <Card.Section>
                    <Button>{"View " + props.title.split(" ")[0]}</Button>
                </Card.Section>
            </Card>
        </>
    );
}

export default OverviewCard;