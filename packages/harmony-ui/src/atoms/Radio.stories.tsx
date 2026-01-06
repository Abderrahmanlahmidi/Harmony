import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta = {
    title: 'Atoms/Radio',
    component: Radio,
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
    },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Option 1',
        name: 'option',
    },
};

export const Checked: Story = {
    args: {
        label: 'Selected option',
        name: 'option',
        checked: true,
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Premium Plan',
        description: 'Get access to all premium features',
        name: 'plan',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Radio label="Small radio" size="sm" name="size" />
            <Radio label="Medium radio" size="md" name="size" />
            <Radio label="Large radio" size="lg" name="size" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: 'Disabled option',
        disabled: true,
        name: 'option',
    },
};

export const Group: Story = {
    render: () => {
        const [selected, setSelected] = useState('option1');

        return (
            <RadioGroup label="Choose an option">
                <Radio
                    label="Option 1"
                    name="group"
                    checked={selected === 'option1'}
                    onChange={() => setSelected('option1')}
                />
                <Radio
                    label="Option 2"
                    name="group"
                    checked={selected === 'option2'}
                    onChange={() => setSelected('option2')}
                />
                <Radio
                    label="Option 3"
                    name="group"
                    checked={selected === 'option3'}
                    onChange={() => setSelected('option3')}
                />
            </RadioGroup>
        );
    },
};

export const Plans: Story = {
    render: () => {
        const [plan, setPlan] = useState('basic');

        return (
            <RadioGroup label="Select your plan">
                <Radio
                    label="Basic"
                    description="Perfect for individuals"
                    name="plan"
                    checked={plan === 'basic'}
                    onChange={() => setPlan('basic')}
                />
                <Radio
                    label="Pro"
                    description="For professionals and teams"
                    name="plan"
                    checked={plan === 'pro'}
                    onChange={() => setPlan('pro')}
                />
                <Radio
                    label="Enterprise"
                    description="Advanced features for large organizations"
                    name="plan"
                    checked={plan === 'enterprise'}
                    onChange={() => setPlan('enterprise')}
                />
            </RadioGroup>
        );
    },
};
