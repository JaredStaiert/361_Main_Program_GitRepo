import React, {useState} from "react";
import {Modal, Button, Checkbox, Group, Text, Stack} from "@mantine/core";

/**
 * AdvancedNotificationModal
 *
 * - Self-contained: no external props or state. Uses local useState only.
 * - Export default at bottom of file only.
 * - Contains two categories of checkboxes. Each checkbox has its own useState.
 * - Category 1 visible title: "Require verfied email"
 *   - bill due date notification
 *   - spending notification
 * - Category 2 has no visible title to the user, but is delimited in code:
 *   - use european decimal separtor
 *   - darkmode
 * - Footer group contains a left "Defaults" button and a right "Save" button,
 *   spaced apart (no programmatic effects).
 *
 * Note: The modal can be opened with the built-in trigger button included here
 * so the component remains fully self-contained.
 */

// TODO: refactor modal AdvancedNotificationModal
const AdvancedNotificationModal: React.FC = () => {
    const [opened, setOpened] = useState(false);

    // Category 1 (visible heading: "Require verfied email")
    const [billDueDateNotification, setBillDueDateNotification] = useState<boolean>(false);
    const [spendingNotification, setSpendingNotification] = useState<boolean>(false);

    // Category 2 (no visible heading; logical grouping in code)
    const [useEuropeanDecimalSepartor, setUseEuropeanDecimalSepartor] = useState<boolean>(false);
    const [darkmode, setDarkmode] = useState<boolean>(false);

    return (
        <>
            <Button onClick={() => setOpened(true)}>Open Advanced Notification</Button>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Advanced notification settings"
                centered
                // overlayBlur={2}
            >
                <Stack>
                    <Text>Require verfied email</Text>

                    <Checkbox
                        label="bill due date notification"
                        checked={billDueDateNotification}
                        onChange={(e) => setBillDueDateNotification(e.currentTarget.checked)}
                    />

                    <Checkbox
                        label="spending notification"
                        checked={spendingNotification}
                        onChange={(e) => setSpendingNotification(e.currentTarget.checked)}
                    />

                    {/* Category 2 (internal grouping; no visible category title to user) */}
                    <div aria-hidden style={{marginTop: 8}}/>

                    <Checkbox
                        label="use european decimal separtor"
                        checked={useEuropeanDecimalSepartor}
                        onChange={(e) => setUseEuropeanDecimalSepartor(e.currentTarget.checked)}
                    />

                    <Checkbox
                        label="darkmode"
                        checked={darkmode}
                        onChange={(e) => setDarkmode(e.currentTarget.checked)}
                    />

                    <Group justify={"space-between"} style={{marginTop: 12}}>
                        <Button variant="default">Defaults</Button>
                        <Button onClick={() => {setOpened(false);}}>Save</Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    );
};

export default AdvancedNotificationModal;