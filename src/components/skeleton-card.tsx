import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonCard() {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-2">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-24 w-full rounded-md" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
            </CardFooter>
        </Card>
    )
}

