import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from './ButtonIcon';
import { Plus, Settings, Trash2, Heart, Star, Eye } from 'lucide-react';

const meta: Meta<typeof ButtonIcon> = {
    title: 'Atoms/ButtonIcon',
    component: ButtonIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'ghost'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isLoading: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        icon: <Plus size={20} />,
        label: 'Add',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        icon: <Settings size={20} />,
        label: 'Settings',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        icon: <Trash2 size={20} />,
        label: 'Delete',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        icon: <Heart size={20} />,
        label: 'Like',
    },
};

export const Loading: Story = {
    args: {
        variant: 'primary',
        icon: <Star size={20} />,
        isLoading: true,
        label: 'Star',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        icon: <Eye size={16} />,
        label: 'View',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        icon: <Plus size={24} />,
        label: 'Add Large',
    },
};
