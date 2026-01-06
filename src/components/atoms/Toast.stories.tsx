import type { Meta, StoryObj } from '@storybook/react';
import { ToastProvider, useToast } from './Toast';
import { Button } from './Button';

const meta = {
    title: 'Atoms/Toast',
    component: ToastProvider,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const ToastDemo = () => {
    const { toast } = useToast();

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Button
                    variant="primary"
                    onClick={() => toast.info('This is an info message')}
                >
                    Info Toast
                </Button>
                <Button
                    variant="primary"
                    onClick={() => toast.success('Operation completed successfully!')}
                >
                    Success Toast
                </Button>
                <Button
                    variant="primary"
                    onClick={() => toast.warning('Please review your settings')}
                >
                    Warning Toast
                </Button>
                <Button
                    variant="primary"
                    onClick={() => toast.error('Something went wrong')}
                >
                    Error Toast
                </Button>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: () => (
        <ToastProvider>
            <ToastDemo />
        </ToastProvider>
    ),
};

export const AllVariants: Story = {
    render: () => {
        const AllToastsDemo = () => {
            const { toast } = useToast();

            const showAllToasts = () => {
                toast.info('System preferences saved!');
                setTimeout(() => toast.success('Payment processed successfully!'), 500);
                setTimeout(() => toast.warning('Your storage is almost full.'), 1000);
                setTimeout(() => toast.error('Connection failed. Try again.'), 1500);
            };

            return (
                <Button onClick={showAllToasts}>
                    Show All Toast Types
                </Button>
            );
        };

        return (
            <ToastProvider>
                <AllToastsDemo />
            </ToastProvider>
        );
    },
};
