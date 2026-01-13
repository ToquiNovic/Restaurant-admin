import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  desc?: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
  className,
  desc,
}) => {
  return (
    <Card className={className}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-base font-medium">{title}</CardTitle>

        {desc && <p className="text-sm text-muted-foreground">{desc}</p>}
      </CardHeader>

      <CardContent className="space-y-6">{children}</CardContent>
    </Card>
  );
};
