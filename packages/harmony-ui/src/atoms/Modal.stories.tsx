import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

const meta = {
    title: 'Atoms/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'danger'],
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = ({ variant = 'info', title, description, children }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                variant={variant}
                title={title}
                description={description}
            >
                {children}
            </Modal>
        </>
    );
};

export const Info: Story = {
    render: () => (
        <ModalWrapper
            variant="info"
            title="Information"
            description="This is an informational modal with important details."
        >
            <p className="text-sm text-neutral-600">
                Additional content can be placed here to provide more context.
            </p>
        </ModalWrapper>
    ),
};

export const Success: Story = {
    render: () => (
        <ModalWrapper
            variant="success"
            title="Success!"
            description="Your operation completed successfully."
        >
            <p className="text-sm text-neutral-600">
                Everything went as expected. You can now proceed with the next steps.
            </p>
        </ModalWrapper>
    ),
};

export const Warning: Story = {
    render: () => (
        <ModalWrapper
            variant="warning"
            title="Warning"
            description="Please review this important information before proceeding."
        >
            <p className="text-sm text-neutral-600">
                This action may have consequences. Make sure you understand what will happen.
            </p>
        </ModalWrapper>
    ),
};

export const Danger: Story = {
    render: () => (
        <ModalWrapper
            variant="danger"
            title="Delete Account"
            description="This action cannot be undone. Are you sure?"
        >
            <p className="text-sm text-neutral-600">
                All your data will be permanently deleted from our servers.
            </p>
        </ModalWrapper>
    ),
};
