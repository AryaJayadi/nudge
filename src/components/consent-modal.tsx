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
                <CardTitle className="text-2xl">Research Study Consent Form</CardTitle>
                <CardDescription>
                    Please read and agree to the following terms before proceeding.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[300px] rounded-md border p-4" scrollHideDelay={0}>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Title of Study:</h3>
                        <p>
                            <b>Model Rekomendasi Nudge untuk Meningkatkan Efektivitas Kampanye Digital di Industri Perbankan</b>
                            <br />(Nudge Recommendation Model to Improve the Effectiveness of Digital Campaigns in the Banking Industry)
                        </p>

                        <h3 className="font-semibold">Researcher Information:</h3>
                        <p>
                            <b>Principal Investigator:</b> Idha Kristiana<br />
                            <b>Institution:</b> Doctor of Computer Science, Bina Nusantara University<br />
                            <b>Contact:</b> idha.kristiana@binus.ac.id
                        </p>

                        <h3 className="font-semibold">Purpose of the Study</h3>
                        <p>
                            Anda diundang untuk berpartisipasi dalam penelitian yang bertujuan mengoptimalkan strategi kampanye digital melalui penggunaan nudge berbasis data.
                            (You are being invited to participate in a research study aimed at optimizing digital campaign strategies through the use of data-driven nudges.)
                        </p>

                        <h3 className="font-semibold">What Participation Involves</h3>
                        <p>
                            Jika Anda setuju untuk berpartisipasi, Anda akan diminta memberikan beberapa informasi pribadi dan menjawab serangkaian pertanyaan.
                            (If you agree to participate, you will be asked to provide some personal information and answer a series of questions.)
                        </p>

                        <h3 className="font-semibold">Confidentiality</h3>
                        <p>
                            Kami berkomitmen untuk melindungi privasi Anda. Semua data yang Anda berikan akan dianonimkan dan disimpan dengan aman.
                            (We are committed to protecting your privacy. All the data you provide will be anonymized and securely stored.)
                        </p>

                        <h3 className="font-semibold">Risks</h3>
                        <p>
                            Risiko dalam penelitian ini minimal. Anda bebas melewati pertanyaan yang tidak ingin Anda jawab.
                            (The risks in this study are minimal. You may skip any question you prefer not to answer.)
                        </p>

                        <h3 className="font-semibold">Benefits</h3>
                        <p>
                            Partisipasi Anda akan membantu memahami cara meningkatkan strategi kampanye digital untuk masa depan.
                            (Your participation will contribute to understanding how to improve digital marketing strategies.)
                        </p>

                        <h3 className="font-semibold">Statement of Consent</h3>
                        <p>Dengan mencentang kotak di bawah ini, Anda menyatakan bahwa:</p>
                        <ul className="list-disc ml-4">
                            <li>Anda telah membaca dan memahami informasi dalam formulir ini.</li>
                            <li>Anda secara sukarela setuju untuk berpartisipasi dalam penelitian ini.</li>
                            <li>Data Anda akan dijaga kerahasiaannya dan hanya digunakan untuk penelitian ini.</li>
                        </ul>

                        <p className="mt-4 font-semibold">Silakan berikan persetujuan Anda dengan mencentang kotak:</p>
                    </div>
                </ScrollArea>

                <div className="flex items-center space-x-2 mt-4">
                    <Checkbox
                        id="terms"
                        checked={agreed}
                        onCheckedChange={(checked) => {
                            setAgreed(checked === true);
                            if (checked) setShowError(false);
                        }}
                    />
                    <label htmlFor="terms" className="text-sm font-medium leading-none">
                        SAYA SETUJU untuk berpartisipasi dalam penelitian ini. (I AGREE to participate in this study.)
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

