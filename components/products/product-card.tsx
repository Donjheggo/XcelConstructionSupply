import { Card, CardContent } from "@/components/ui/card";
import { formatToPeso } from "@/lib/utils";

export default function ProductCard() {
  return (
    <Card className="w-full max-w[200px] hover:border-neutral-950/[0.4]">
      <img
        src="/images/placeholder.svg"
        alt="Product Image"
        width={400}
        className="aspect-square object-cover rounded-t-lg"
      />
      <CardContent className="p-2">
        <div className="flex">
          <h2 className="text-sm font-semibold">Cozy Knit Sweater</h2>
          <h2 className="ml-auto text-sm font-bold">{formatToPeso(1230)}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
