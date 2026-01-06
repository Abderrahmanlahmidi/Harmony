import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Search } from 'lucide-react';

const meta = {
    title: 'Atoms/SearchBar',
    component: SearchBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        isLoading: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Search...',
    },
};

export const WithValue: Story = {
    args: {
        placeholder: 'Search...',
        value: 'Design system',
    },
};

export const Loading: Story = {
    args: {
        placeholder: 'Searching...',
        isLoading: true,
        value: 'query',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4 w-96">
            <SearchBar placeholder="Small search" size="sm" />
            <SearchBar placeholder="Medium search" size="md" />
            <SearchBar placeholder="Large search" size="lg" />
        </div>
    ),
};

export const WithShortcut: Story = {
    args: {
        placeholder: 'Search...',
        shortcut: '⌘K',
    },
};

export const Interactive: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [isLoading, setIsLoading] = useState(false);

        const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 1000);
        };

        const handleClear = () => {
            setValue('');
        };

        return (
            <div className="w-96">
                <SearchBar
                    placeholder="Search for anything..."
                    value={value}
                    onChange={handleSearch}
                    onClear={handleClear}
                    isLoading={isLoading}
                    shortcut="⌘K"
                />
                {value && !isLoading && (
                    <p className="mt-4 text-sm text-neutral-600">
                        Searching for: <strong>{value}</strong>
                    </p>
                )}
            </div>
        );
    },
};
