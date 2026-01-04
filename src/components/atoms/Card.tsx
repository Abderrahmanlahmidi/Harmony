import { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "ghost" | "elevated" | "glass";
  hoverable?: boolean;
  loading?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      hoverable = false,
      loading = false,
      children,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[1.5rem] transition-all duration-300",
        "text-neutral-900 border-neutral-200/60",
        {
          "bg-white dark:bg-neutral-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border":
            variant === "default",
          "bg-transparent border-2": variant === "outline",
          "bg-white/50 hover:bg-white dark:bg-neutral-100/10 dark:hover:bg-neutral-100/20 border-transparent":
            variant === "ghost",
          "bg-white dark:bg-neutral-50 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border-transparent":
            variant === "elevated",
          "bg-white/80 dark:bg-neutral-50/80 backdrop-blur-xl border-white/20 shadow-lg":
            variant === "glass",
          "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1.5":
            hoverable,
          "pointer-events-none": loading,
        },
        className
      )}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 z-20 bg-neutral-50/60 backdrop-blur-sm flex items-center justify-center">
          <div className="w-10 h-10 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      {children}
    </div>
  )
);
Card.displayName = "Card";

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-6 pb-4", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold tracking-tight text-neutral-900",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardSubtitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-[0.7rem] font-black uppercase tracking-[0.2em] text-primary/80 mb-1",
      className
    )}
    {...props}
  />
));
CardSubtitle.displayName = "CardSubtitle";

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-neutral-500 leading-relaxed font-medium",
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-2 flex-1", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-2 border-t border-neutral-100/50 mt-auto",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: "auto" | "video" | "square" | "portrait";
}

const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, aspectRatio = "auto", ...props }, ref) => (
    <div
      className={cn("w-full overflow-hidden relative", {
        "aspect-video": aspectRatio === "video",
        "aspect-square": aspectRatio === "square",
        "aspect-[3/4]": aspectRatio === "portrait",
      })}
    >
      <img
        ref={ref}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 hover:scale-105",
          className
        )}
        {...props}
      />
    </div>
  )
);
CardImage.displayName = "CardImage";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardDescription,
  CardContent,
  CardImage,
};
