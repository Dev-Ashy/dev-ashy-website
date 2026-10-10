export type BadgeTone = "shipping" | "alpha" | "beta" | "planned";

const labels: Record<BadgeTone, string> = {
  shipping: "shipping",
  alpha: "alpha",
  beta: "beta",
  planned: "planned",
};

export default function StatusBadge({
  tone,
  children,
}: {
  tone: BadgeTone;
  children?: string;
}) {
  return (
    <span className={`badge badge-${tone}`}>{children ?? labels[tone]}</span>
  );
}