import {BarChart3, Building2, Coins, DollarSign, Landmark} from "lucide-react";
import ProductCard from "@/components/product-card.tsx";

const investmentProducts = [
    {
        title: "Deposito Berjangka",
        description: "Investasi aman dengan imbal hasil tetap",
        icon: <Landmark className="h-6 w-6" />,
        return: "5,5% - 6,5% p.a.",
        minInvestment: "Rp 10.000.000",
        isPopular: true,
        features: ["Bunga dibayar di muka", "Perpanjangan otomatis", "Dapat dijadikan jaminan"],
        benefits: ["Imbal hasil pasti", "Dijamin LPS", "Bebas pajak bunga"],
        risks: ["Penalti pencairan dini", "Bunga dapat berubah saat perpanjangan"],
    },
    {
        title: "Obligasi (Bond)",
        description: "Surat utang dengan pendapatan tetap",
        icon: <Building2 className="h-6 w-6" />,
        return: "6,5% - 8,5% p.a.",
        minInvestment: "Rp 1.000.000",
        features: ["Kupon tetap/variabel", "Diperdagangkan di pasar sekunder", "Tersedia obligasi pemerintah & korporasi"],
        benefits: ["Pendapatan tetap", "Potensi capital gain", "Likuiditas tinggi"],
        risks: ["Risiko gagal bayar", "Risiko suku bunga", "Risiko likuiditas"],
    },
    {
        title: "Reksa Dana Pasar Uang",
        description: "Investasi jangka pendek dengan risiko rendah",
        icon: <DollarSign className="h-6 w-6" />,
        return: "4% - 6% p.a.",
        minInvestment: "Rp 100.000",
        features: ["Likuiditas tinggi", "Investasi instrumen pasar uang", "Jangka pendek"],
        benefits: ["Risiko minimal", "Pencairan cepat", "Alternatif deposito"],
        risks: ["Return relatif rendah", "Risiko suku bunga", "Biaya manajemen"],
    },
    {
        title: "Reksa Dana Saham",
        description: "Investasi mayoritas pada saham",
        icon: <BarChart3 className="h-6 w-6" />,
        return: "> 12% p.a.",
        minInvestment: "Rp 100.000",
        features: ["Portfolio saham", "Manajemen aktif", "Diversifikasi luas"],
        benefits: ["Potensi return tinggi", "Dikelola profesional", "Akses ke berbagai saham"],
        risks: ["Fluktuasi tinggi", "Risiko pasar", "Biaya manajemen"],
    },
    {
        title: "Produk Emas (Gold Investment)",
        description: "Investasi emas fisik dan digital",
        icon: <Coins className="h-6 w-6" />,
        return: "Sesuai harga emas",
        minInvestment: "Rp 50.000",
        features: ["Emas digital & fisik", "Transaksi 24/7", "Penyimpanan aman"],
        benefits: ["Lindung nilai inflasi", "Likuiditas tinggi", "Tanpa kadaluarsa"],
        risks: ["Fluktuasi harga emas", "Biaya penyimpanan", "Spread jual-beli"],
    },
]

export const InvestasiPage = () => {
    return (
        <>
            {investmentProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    isPopular={true}
                    primaryInfo={{ label: "Potensi Return", value: product.return }}
                    secondaryInfo={{ label: "Min. Investasi", value: product.minInvestment }}
                    features={product.features}
                    benefits={product.benefits}
                    risks={product.risks}
                    ctaText="Investasi Sekarang"
                    onCtaClick={() => console.log(`Investasi di ${product.title}`)}
                />
            ))}
        </>
    )
}