import {Button, Card, Text} from "@mantine/core";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function FirstTimeBudgetCard() {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    //TODO: refactor navigation, consider deleting component
    if (!visible) return null;

    return (
        <>
            <Card radius={"md"}>
                <Card.Section>
                    <Text>This is Dashboard, here you can see a quick overview
                        of all of your financials.</Text>
                </Card.Section>
                <Card.Section>
                    <Button onClick={() => {navigate("/budget");}}>Create Budget</Button>
                </Card.Section>
            </Card>
        </>
    );
}

export default FirstTimeBudgetCard;