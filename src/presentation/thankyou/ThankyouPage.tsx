import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Terima Kasih</h1>
                <p className="text-gray-700 mb-6">
                    Terima kasih telah menyelesaikan simulasi nudge. Hadiah anda sedang diproses. Anda akan menerima notifikasi
                    dalam waktu 3x24 jam.
                </p>
                <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
        </div>
    )
}