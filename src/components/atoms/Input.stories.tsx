import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Mail, Lock, User, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: 'select',
            options: ['default', 'filled'],
        },
        disabled: {
            control: 'boolean'
        },
        fullWidth: {
            control: 'boolean'
        }
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Enter text here...',
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'example@email.com',
        type: 'email',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        placeholder: 'Enter username',
        helperText: 'This will be your public display name.',
    },
};

export const WithIcons: Story = {
    args: {
        label: 'Search',
        placeholder: 'Search for anything...',
        startIcon: <Search size={20} />,
    },
};

export const LoginExample: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[350px]">
            <Input
                label="Email"
                placeholder="john@example.com"
                startIcon={<Mail size={20} />}
                fullWidth
            />
            <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                startIcon={<Lock size={20} />}
                fullWidth
            />
        </div>
    )
}

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[300px]">
            <Input size="sm" placeholder="Small Input" />
            <Input size="md" placeholder="Medium Input" />
            <Input size="lg" placeholder="Large Input" />
        </div>
    ),
};

export const States: Story = {
    render: () => (
        <div className="flex flex-col gap-4 w-[300px]">
            <Input
                label="Success State"
                defaultValue="Valid Input"
                success="Looks good!"
                endIcon={<CheckCircle2 size={20} />}
            />
            <Input
                label="Error State"
                defaultValue="Invalid Input"
                error="This field is required"
                endIcon={<AlertCircle size={20} />}
            />
            <Input
                label="Disabled"
                placeholder="Disabled Input"
                disabled
            />
        </div>
    ),
};
