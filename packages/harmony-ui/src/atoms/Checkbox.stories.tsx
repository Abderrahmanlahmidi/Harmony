import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

const meta = {
    title: 'Atoms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'boolean',
        },
        indeterminate: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Accept terms and conditions',
        defaultChecked: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'Checked checkbox',
        defaultChecked: true,
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Enable notifications',
        description: 'Receive email notifications about your account activity',
        defaultChecked: false,
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox label="Small checkbox" size="sm" />
            <Checkbox label="Medium checkbox" size="md" />
            <Checkbox label="Large checkbox" size="lg" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: 'Disabled checkbox',
        disabled: true,
    },
};

export const Error: Story = {
    args: {
        label: 'Checkbox with error',
        error: true,
    },
};

export const Indeterminate: Story = {
    args: {
        label: 'Indeterminate checkbox',
        indeterminate: true,
    },
};

export const Group: Story = {
    render: () => (
        <CheckboxGroup label="Select your interests">
            <Checkbox label="Design" name="interests" />
            <Checkbox label="Development" name="interests" />
            <Checkbox label="Marketing" name="interests" />
            <Checkbox label="Sales" name="interests" />
        </CheckboxGroup>
    ),
};
