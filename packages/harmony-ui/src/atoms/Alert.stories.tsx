import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Terminal } from 'lucide-react';

const meta = {
    title: 'Atoms/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['info', 'success', 'warning', 'danger'],
        },
        layout: {
            control: 'radio',
            options: ['default', 'pill']
        },
        hideIcon: {
            control: 'boolean'
        }
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InfoDefault: Story = {
    args: {
        variant: 'info',
        children: 'This is an info alert meant to provide standard context to the user.',
    },
};

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'Operation completed successfully. Your data has been saved.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'Warning: Your account is about to expire in 3 days.',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Error: Failed to connect to the server. Please try again later.',
    },
};

export const Dismissible: Story = {
    args: {
        variant: 'info',
        children: 'You can dismiss this alert by clicking the X icon.',
        onClose: () => alert('Closed!'),
    },
};

export const CustomIcon: Story = {
    args: {
        variant: 'info',
        icon: <Terminal className="w-5 h-5" />,
        children: 'This alert uses a custom Terminal icon passed via props.',
    },
};

export const Pill: Story = {
    args: {
        layout: 'pill',
        variant: 'info',
        hideIcon: true,
        children: (
            <div className="flex items-center gap-2">
                <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">New</span>
                <span>Version 2.0 is now available!</span>
            </div>
        )
    }
};
