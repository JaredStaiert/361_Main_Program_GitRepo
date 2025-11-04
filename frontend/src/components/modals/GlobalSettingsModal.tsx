import {useDisclosure} from "@mantine/hooks";
import {Button, Modal} from "@mantine/core";
import type {JSX} from "react";
import AdvancedNotificationModal from "./AdvancedNotificationModal.tsx";

function GlobalSettingsModal(): JSX.Element {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Global Settings">
                <GlobalModalContent/>
            </Modal>

            <Button onClick={open}>Settings</Button>
        </>
    );
}

function GlobalModalContent(): JSX.Element {

    // TODO: refactor modal AdvancedNotificationModal
    return (
        <>
            <AdvancedNotificationModal/>
            <Button>RESET GLOBAL SETTINGS</Button>
        </>
    );
}

export default GlobalSettingsModal;