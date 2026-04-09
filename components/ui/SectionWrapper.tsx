import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  style?: React.CSSProperties;
}

export default function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
  style,
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn("py-20 px-6", className)} style={style}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </Tag>
  );
}
