import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './ProgressBar';

const meta = {
    title: 'Atoms/ProgressBar',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: { type: 'range', min: 0, max: 100, step: 1 },
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        showValue: {
            control: 'boolean',
        },
        striped: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 50,
    },
};

export const WithLabel: Story = {
    args: {
        value: 75,
        label: 'Upload progress',
        showValue: true,
    },
};

export const Variants: Story = {
    render: () => (
        <div className="space-y-4 w-96">
            <Progress value={60} variant="primary" label="Primary" showValue />
            <Progress value={70} variant="secondary" label="Secondary" showValue />
            <Progress value={80} variant="success" label="Success" showValue />
            <Progress value={50} variant="warning" label="Warning" showValue />
            <Progress value={30} variant="danger" label="Danger" showValue />
            <Progress value={90} variant="info" label="Info" showValue />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4 w-96">
            <Progress value={60} size="xs" label="Extra Small" />
            <Progress value={60} size="sm" label="Small" />
            <Progress value={60} size="md" label="Medium" />
            <Progress value={60} size="lg" label="Large" />
            <Progress value={60} size="xl" label="Extra Large" />
        </div>
    ),
};

export const Striped: Story = {
    args: {
        value: 65,
        striped: true,
        label: 'Striped progress',
        showValue: true,
    },
};

export const Complete: Story = {
    args: {
        value: 100,
        variant: 'success',
        label: 'Complete',
        showValue: true,
    },
};

export const FileUpload: Story = {
    render: () => (
        <div className="space-y-6 w-96">
            <Progress value={75} label="design-system.zip" variant="primary" showValue striped />
            <Progress value={45} label="user-avatars.zip" variant="info" showValue />
            <Progress value={100} label="backup-data.db" variant="success" showValue />
        </div>
    ),
};
