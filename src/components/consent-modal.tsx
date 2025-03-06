import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle } from "lucide-react"

interface ConsentModalProps {
    onConsent: () => void
}

export default function ConsentModal({ onConsent }: ConsentModalProps) {
    const [agreed, setAgreed] = useState(false)
    const [showError, setShowError] = useState(false)

    const handleContinue = () => {
        if (agreed) {
            onConsent()
        } else {
            setShowError(true)
        }
    }

    return (
        <Card className="w-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl">Terms and Conditions</CardTitle>
                <CardDescription>
                    Please read and agree to the following terms and conditions before proceeding to the questionnaire.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4" scrollHideDelay={0}>
                    <div className="space-y-4">
                        <h3 className="font-semibold">1. Introduction</h3>
                        <p>
                            Welcome to our questionnaire. These Terms and Conditions govern your use of our service and the
                            information you provide.
                        </p>

                        <h3 className="font-semibold">2. Data Collection and Privacy</h3>
                        <p>
                            We collect information that you provide directly to us through this questionnaire. This information will
                            be used for research purposes only. We are committed to maintaining the confidentiality and security of
                            your personal information.
                        </p>

                        <h3 className="font-semibold">3. Use of Information</h3>
                        <p>
                            The information collected will be used to improve our services and may be used in aggregate form for
                            statistical analysis. Your individual responses will not be shared with third parties without your
                            consent.
                        </p>

                        <h3 className="font-semibold">4. Voluntary Participation</h3>
                        <p>
                            Your participation in this questionnaire is completely voluntary. You may choose not to answer any
                            question or discontinue at any time.
                        </p>

                        <h3 className="font-semibold">5. Modifications</h3>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Continued use of our service after
                            such modifications constitutes your acceptance of the revised terms.
                        </p>

                        <h3 className="font-semibold">6. Contact Information</h3>
                        <p>If you have any questions about these Terms and Conditions, please contact us at support@example.com.</p>
                    </div>
                </ScrollArea>

                <div className="flex items-center space-x-2 mt-4">
                    <Checkbox
                        id="terms"
                        checked={agreed}
                        onCheckedChange={(checked) => {
                            setAgreed(checked === true)
                            if (checked) setShowError(false)
                        }}
                    />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        I agree to the terms and conditions
                    </label>
                </div>

                {showError && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        <span>You must agree to the terms and conditions to continue</span>
                    </div>
                )}
            </CardContent>
            <CardFooter>
                <Button onClick={handleContinue} className="w-full">
                    Continue
                </Button>
            </CardFooter>
        </Card>
    )
}

