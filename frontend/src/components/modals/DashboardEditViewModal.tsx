import type {JSX} from "react";
import {Button, Group, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

function DashboardEditViewModal(): JSX.Element {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Edit View">
                <DashboardEditViewContent/>
            </Modal>

            <Button onClick={open} color={"veridian"}>Change View</Button>
        </>
    );
}

function DashboardEditViewContent(): JSX.Element {
    return (
        <>
            <Group justify={"space-between"}>
                <Button>Default</Button>
                <Button>Save</Button>
            </Group>
        </>
    );
}

export default DashboardEditViewModal;