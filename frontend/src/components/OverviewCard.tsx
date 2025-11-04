import type {JSX} from "react";
import {Button, Card, Group, Text} from "@mantine/core";
import {type OverviewCompDesc, OverviewComponents} from "./Card.ts";
import {useNavigate} from "react-router-dom";

export interface OverviewCardProps {
    title: string;
    components: OverviewCompDesc[];
    pageLink: string;
}

function OverviewCard(props: OverviewCardProps): JSX.Element {
    const navigate = useNavigate();

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
                    <Group justify={"right"}>
                        <Button onClick={() => {navigate(props.pageLink);}}>{"View " + props.title.split(" ")[0]}</Button>
                    </Group>
                </Card.Section>
            </Card>
        </>
    );
}

export default OverviewCard;