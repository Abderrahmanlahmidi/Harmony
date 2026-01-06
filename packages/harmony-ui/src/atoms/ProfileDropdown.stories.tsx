import type { Meta, StoryObj } from '@storybook/react';
import { ProfileDropdown } from './ProfileDropdown';

const meta = {
    title: 'Atoms/ProfileDropdown',
    component: ProfileDropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        user: {
            name: 'John Doe',
            email: 'john.doe@example.com',
        },
    },
};

export const WithAvatar: Story = {
    args: {
        user: {
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop',
        },
    },
};

export const LongName: Story = {
    args: {
        user: {
            name: 'Abderrahman Lahmidi',
            email: 'abderrahman.lahmidi@example.com',
        },
    },
};

export const InDarkBackground: Story = {
    args: {
        user: {
            name: 'Alex Johnson',
            email: 'alex@example.com',
        },
    },
    decorators: [
        (Story) => (
            <div className="bg-neutral-900 p-12 rounded-2xl">
                <Story />
            </div>
        ),
    ],
};
