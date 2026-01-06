import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardSubtitle, CardDescription, CardContent, CardFooter, CardImage } from './Card';
import { Button } from './Button';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const meta = {
    title: 'Atoms/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline', 'ghost', 'elevated', 'glass'],
        },
        hoverable: { control: 'boolean' },
        loading: { control: 'boolean' },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        className: "w-[350px]",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-20 bg-neutral-100 dark:bg-neutral-800 rounded-lg border-2 border-dashed border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-400">
                        Content Area
                    </div>
                </CardContent>
                <CardFooter className="justify-end gap-2">
                    <Button variant="outline" size="sm">Cancel</Button>
                    <Button size="sm">Save Changes</Button>
                </CardFooter>
            </>
        )
    },
};

export const Product: Story = {
    args: {
        variant: 'elevated',
        hoverable: true,
        className: "w-[320px] overflow-hidden group",
        children: (
            <>
                <CardImage
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
                    aspectRatio="square"
                />
                <CardHeader>
                    <CardSubtitle>Premium Edition</CardSubtitle>
                    <CardTitle className="mb-1">Nike Air Max Infinity</CardTitle>
                    <CardDescription>Lifestyle & Performance Shoe</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-black text-primary">$180.00</div>
                    <p className="mt-2 text-sm text-neutral-500">
                        Stay comfortable all day with a mix of modern style and technical innovation.
                    </p>
                </CardContent>
                <CardFooter className="gap-2">
                    <Button className="flex-1 gap-2">
                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </Button>
                    <Button variant="outline" size="sm" className="w-11 h-11 p-0 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </CardFooter>
            </>
        )
    },
};

export const Glassmorphism: Story = {
    args: {
        variant: 'glass',
        className: "w-[350px]",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Glass Variant</CardTitle>
                    <CardDescription>Perfect for overlays on colorful backgrounds.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary-700 dark:text-primary-300 text-sm">
                        This card uses Backdrop Filter for a premium frosted look.
                    </div>
                </CardContent>
            </>
        )
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        className: "w-[350px]",
        children: (
            <>
                <CardHeader>
                    <CardTitle>Loading Data...</CardTitle>
                    <CardDescription>Please wait while we fetch your info.</CardDescription>
                </CardHeader>
                <CardContent className="h-32" />
            </>
        )
    },
};

