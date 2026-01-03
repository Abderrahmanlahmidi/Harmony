import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
    title: 'Typography',
    component: Typography,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['display', 'heading', 'bodyLarge', 'bodyMedium', 'caption'],
        },
        showLabel: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
    args: {
        variant: 'display',
        children: 'Almost before we knew it, we had left the ground.',
        showLabel: true,
    },
};

export const Heading: Story = {
    args: {
        variant: 'heading',
        children: 'The quick brown fox jumps over the lazy dog.',
        showLabel: true,
    },
};

export const BodyLarge: Story = {
    args: {
        variant: 'bodyLarge',
        children: 'Design is not just what it looks like and feels like. Design is how it works.',
        showLabel: true,
    },
};

export const BodyMedium: Story = {
    args: {
        variant: 'bodyMedium',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        showLabel: true,
    },
};

export const Caption: Story = {
    args: {
        variant: 'caption',
        children: 'Display 2XL',
    },
};