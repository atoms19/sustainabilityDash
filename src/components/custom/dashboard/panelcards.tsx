import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Bolt, CloudLightning, PlusIcon, Trash, Zap } from "lucide-react";
import Link from "next/link";

export default function PanelCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
        <CardHeader className="pb-3">
          <CardTitle className="mb-7">Start Entry</CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
            Enter your Monthly Emmission to see how much you are contributing to
            the environment
          </CardDescription>
        </CardHeader>
        <CardFooter className="pt-5">
          <Link href="/entry">
            <Button>
              Create New Entry <PlusIcon />
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-4 ">
            {" "}
            <Trash className="w-4 h-4" /> This Month
          </CardDescription>
          <CardTitle className="text-3xl">50 kg</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">+25% from month</div>
        </CardContent>
        <CardFooter>
          <Progress value={25} aria-label="25% increase" />
        </CardFooter>
      </Card>

      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center gap-4 ">
            <Zap className="flex items-center gap-4 w-4 h-4" /> This Month
          </CardDescription>
          <CardTitle className="text-4xl">40v</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +10% from last month
          </div>
        </CardContent>
        <CardFooter>
          <Progress value={12} aria-label="12% increase" />
        </CardFooter>
      </Card>
    </div>
  );
}
