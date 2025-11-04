import {Button, Card, Text} from "@mantine/core";
import {useState} from "react";

function DashboardExplanationCard() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    return (
        <>
            <Card radius={"md"}>
                <Card.Section>
                    <Text>This is Dashboard, here you can see a quick overview
                    of all of your financials.</Text>
                </Card.Section>
                <Card.Section>
                    <Button onClick={() => setVisible(false)}>Dismiss</Button>
                </Card.Section>
            </Card>
        </>
    );
}

export default DashboardExplanationCard;