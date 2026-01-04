import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { Check, ShieldAlert, AlertTriangle, Info } from 'lucide-react';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'neutral', 'primary', 'secondary', 'success', 'warning', 'danger', 'outline'],
        },
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        rounded: {
            control: 'radio',
            options: ['sm', 'md', 'full'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'default',
    },
};

export const Primary: Story = {
    args: {
        children: 'Primary',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
};

export const Success: Story = {
    args: {
        children: (
            <span className="flex items-center gap-1.5">
                <Check size={12} />
                Success
            </span>
        ),
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: (
            <span className="flex items-center gap-1.5">
                <AlertTriangle size={12} />
                Warning
            </span>
        ),
        variant: 'warning',
    },
};

export const Danger: Story = {
    args: {
        children: (
            <span className="flex items-center gap-1.5">
                <ShieldAlert size={12} />
                Danger
            </span>
        ),
        variant: 'danger',
    },
};
