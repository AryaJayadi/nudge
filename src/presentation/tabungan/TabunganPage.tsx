import ProductCard from "@/components/product-card.tsx";
import {ChurchIcon, Landmark, PiggyBank, Plane} from "lucide-react";
import useViewModel from "./TabunganPageViewModel.ts"

const savingsProducts = [
    {
        title: "Tabungan Reguler",
        description: "Tabungan harian dengan akses mudah dan fleksibel",
        icon: <PiggyBank className="h-6 w-6" />,
        interest: "2,5% p.a.",
        minDeposit: "Rp 50.000",
        isPopular: true,
        features: ["Kartu ATM/Debit", "Mobile & Internet Banking", "Notifikasi Transaksi", "Auto Debit & Auto Transfer"],
        benefits: ["Gratis biaya admin", "Setoran awal ringan", "Akses ATM 24/7", "Dapat digunakan sebagai payroll"],
        risks: ["Suku bunga dapat berubah sewaktu-waktu"],
    },
    {
        title: "Deposito",
        description: "Simpanan berjangka dengan bunga kompetitif",
        icon: <Landmark className="h-6 w-6" />,
        interest: "5,5% p.a.",
        minDeposit: "Rp 5.000.000",
        features: ["Perpanjangan otomatis (ARO)", "Bunga dapat ditransfer ke rekening", "Sertifikat deposito"],
        benefits: ["Bunga lebih tinggi", "Jangka waktu fleksibel", "Dapat dijadikan jaminan kredit"],
        risks: ["Penalti untuk pencairan sebelum jatuh tempo", "Bunga dapat berubah saat perpanjangan"],
    },
    {
        title: "Tabungan Berjangka",
        description: "Program menabung rutin dengan target waktu",
        icon: <Plane className="h-6 w-6" />,
        interest: "3,5% p.a.",
        minDeposit: "Rp 100.000/bulan",
        features: ["Setoran rutin bulanan", "Jangka waktu 1-5 tahun", "Auto debit dari rekening utama"],
        benefits: ["Bunga lebih tinggi dari tabungan biasa", "Disiplin menabung", "Bebas biaya admin"],
        risks: ["Penalti jika tidak rutin menabung", "Penalti pencairan sebelum jatuh tempo"],
    },
    {
        title: "Tabungan Haji",
        description: "Tabungan khusus untuk persiapan ibadah haji",
        icon: <ChurchIcon className="h-6 w-6" />,
        interest: "1% p.a.",
        minDeposit: "Rp 500.000",
        features: ["Terhubung dengan SISKOHAT", "Bebas biaya pembukaan", "Fasilitas asuransi jiwa"],
        benefits: ["Prioritas pendaftaran haji", "Bebas biaya admin", "Konsultasi persiapan haji"],
        risks: ["Dana hanya dapat dicairkan untuk keperluan haji", "Antrian keberangkatan sesuai kuota"],
    },
]

export const TabunganPage = () => {
    const {
        loading,
        record
    } = useViewModel();

    return (
        <>
            {savingsProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    isPopular={true}
                    primaryInfo={{ label: "Bunga", value: product.interest }}
                    secondaryInfo={{ label: "Setoran Minimal", value: product.minDeposit }}
                    features={product.features}
                    benefits={product.benefits}
                    risks={product.risks}
                    ctaText="Buka Sekarang"
                    onCtaClick={() => console.log(`Buka ${product.title}`)}
                />
            ))}
        </>
    )
}