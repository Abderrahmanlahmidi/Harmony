import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta = {
    title: 'Atoms/Toggle',
    component: Toggle,
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
    },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Enable notifications',
    },
};

export const Checked: Story = {
    args: {
        label: 'Dark mode',
        defaultChecked: true,
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Auto-save',
        description: 'Automatically save your work every 30 seconds',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Toggle label="Small toggle" size="sm" />
            <Toggle label="Medium toggle" size="md" />
            <Toggle label="Large toggle" size="lg" />
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        label: 'Disabled toggle',
        disabled: true,
    },
};

export const Error: Story = {
    args: {
        label: 'Toggle with error',
        error: true,
    },
};

export const Interactive: Story = {
    render: () => {
        const [settings, setSettings] = useState({
            notifications: true,
            darkMode: false,
            autoSave: true,
        });

        return (
            <div className="space-y-4">
                <Toggle
                    label="Notifications"
                    description="Receive email notifications"
                    checked={settings.notifications}
                    onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                />
                <Toggle
                    label="Dark Mode"
                    description="Use dark theme"
                    checked={settings.darkMode}
                    onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
                />
                <Toggle
                    label="Auto-save"
                    description="Save changes automatically"
                    checked={settings.autoSave}
                    onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
                />
            </div>
        );
    },
};
