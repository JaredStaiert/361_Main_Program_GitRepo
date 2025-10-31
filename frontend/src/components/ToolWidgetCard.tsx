import {type JSX} from "react";
import {ToolWidgetComponents, type ToolWidgetTool} from "./Card.ts";
import {Button, Card, Group, Text} from "@mantine/core";

interface ToolWidgetCardProps {
    widgets: ToolWidgetTool[]
}

function ToolWidgetCard(props: ToolWidgetCardProps): JSX.Element {
    // const [tools, setTools] = useState<ToolWidgetTool[]>(props.widgets);

    return (
        <>
            <Card>
                <Card.Section>
                    <Group justify={"space-between"}>
                        <Text>{"Tools"}</Text>
                        <Button>Edit Tools</Button>
                    </Group>
                </Card.Section>
                <Card.Section>
                    <Group>
                        {props.widgets.map(w => {
                            const Comp = ToolWidgetComponents[w.type];
                            const key = w.type;
                            return (<Comp key={key}/>);
                        })}
                    </Group>
                </Card.Section>
                <Card.Section>
                    <Button>View Tools</Button>
                </Card.Section>
            </Card>
        </>
    );
}

export default ToolWidgetCard;