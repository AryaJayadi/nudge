import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

export const BerandaPage = () => {
    return (
        <div className="space-y-4 max-w-md mx-auto">
            <Card className="bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300">
                <CardHeader>
                    <CardTitle className="text-base text-yellow-800">Total Saldo</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold mb-1 text-yellow-900">Rp 3.000.000.000</div>
                    <div className="text-sm text-yellow-700">+2,5% dari bulan lalu</div>
                </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                    <p className="text-sm text-blue-800">
                        <strong>Disclaimer:</strong> Saldo yang ditampilkan dalam aplikasi ini bersifat fiktif dan hanya
                        digunakan
                        untuk keperluan penelitian serta simulasi model rekomendasi nudge. Saldo ini tidak mencerminkan
                        saldo
                        aktual pengguna. Dalam simulasi ini, saldo yang digunakan adalah sebesar Rp 300.000.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}