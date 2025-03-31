import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import useViewModel from "./BerandaPageViewModel.ts"
import {TransactionHistoryCard} from "@/components/transaction-history-card.tsx";
import {useUser} from "@/presentation/context/UserContext.tsx";
import {calcPrize, formatCurrency} from "@/lib/utils.ts";
import {Button} from "@/components/ui/button.tsx";
import FeedbackModal from "@/components/feedback-modal.tsx";
import CarouselBeranda from "@/components/carousel-beranda.tsx";
import CardCarousel from "@/components/carousel-card.tsx";

export const BerandaPage = () => {
    const {
        user
    } = useUser();
    const {
        transactions,
        cards,
        recommendations,
        showModal,
        setShowModal,
        handleFinish,
        handleCardClick,
        onPurchase
    } = useViewModel();

    return (
        <>
            <Card className="bg-gradient-to-r from-cyan-400 to-teal-400 border-teal-300">
                <CardHeader>
                    <CardTitle className="text-white text-xl">Total Saldo</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold mb-1 text-white">{formatCurrency(user?.balance ?? 0)}</div>
                    <div className="text-sm text-white">
                        Setara dengan hadiah
                        <span className="font-semibold">
                            {" " + formatCurrency(calcPrize(user?.balance ?? 0)) + " "}
                        </span>
                        yang bisa Anda kembangkan melalui Nudge Simulation App. Mainkan sekarang!
                    </div>
                    <Button size="sm" className="w-full bg-white hover:bg-blue-100 text-blue-800 mt-4" onClick={() => setShowModal(true)}>
                        {"Selesaikan Simulasi"}
                    </Button>
                </CardContent>
            </Card>

            <CardCarousel products={recommendations} onPurchase={onPurchase} />

            <TransactionHistoryCard transactions={transactions}/>

            <CarouselBeranda cards={cards} onCardClick={handleCardClick} />

            <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-4">
                    <p className="text-sm text-blue-800">
                        <strong>Disclaimer:</strong>
                        <li>
                            Saldo yang ditampilkan dalam aplikasi ini bersifat simulasi dan
                            tidak mencerminkan saldo aktual pengguna. Data ini digunakan semata-mata untuk keperluan
                            penelitian dan pengujian model rekomendasi nudge.
                        </li>
                        <li>
                            Dalam simulasi ini, Anda akan mendapatkan hadiah awal sebesar Rp50.000 dan diberi kesempatan
                            untuk mengembangkan total hadiah tersebut dengan memainkan aplikasi Nudge Simulation Model.
                        </li>
                    </p>
                </CardContent>
            </Card>

            <FeedbackModal isOpen={showModal} onClose={() => setShowModal(false)} onFinish={handleFinish} />
        </>
    )
}