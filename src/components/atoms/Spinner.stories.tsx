import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
    title: 'Atoms/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'white', 'current'],
        },
        thickness: {
            control: 'select',
            options: ['thin', 'normal', 'thick'],
        },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        variant: 'primary',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div className="flex gap-4 items-center bg-neutral-900 p-8 rounded-xl">
            <Spinner variant="primary" />
            <Spinner variant="secondary" />
            <Spinner variant="white" />
        </div>
    ),
};

export const Thickness: Story = {
    render: () => (
        <div className="flex gap-4 items-center">
            <Spinner thickness="thin" size="lg" />
            <Spinner thickness="normal" size="lg" />
            <Spinner thickness="thick" size="lg" />
        </div>
    ),
};
