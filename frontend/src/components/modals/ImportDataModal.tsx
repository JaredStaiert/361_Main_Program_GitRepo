import {Button, Modal} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

function ImportDataModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Choose File To Import" centered>
                {/* Modal content */}
            </Modal>

            <Button variant="default" onClick={open}>
                Open centered Modal
            </Button>
        </>
    );
}

export default ImportDataModal;