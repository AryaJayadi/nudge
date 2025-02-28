import {Car, CreditCard, Home, Wallet} from "lucide-react";
import ProductCard from "@/components/product-card.tsx";

const creditProducts = [
    {
        title: "Kredit Pemilikan Rumah (KPR)",
        description: "Wujudkan rumah impian dengan KPR bunga kompetitif",
        icon: <Home className="h-6 w-6" />,
        interest: "7,5% p.a.",
        maxLoan: "Rp 2 Miliar",
        isPopular: true,
        features: ["Suku bunga fixed & floating", "Take over dari bank lain", "Pembiayaan renovasi"],
        benefits: ["Suku bunga kompetitif", "Proses cepat", "Fleksibilitas tenor"],
        risks: ["Suku bunga dapat berubah", "Properti dapat disita jika gagal bayar", "Penalti pelunasan dipercepat"],
    },
    {
        title: "Kredit Tanpa Agunan (KTA)",
        description: "Pinjaman tanpa jaminan untuk berbagai keperluan",
        icon: <Wallet className="h-6 w-6" />,
        interest: "12,5% p.a.",
        maxLoan: "Rp 300 Juta",
        features: ["Pencairan cepat", "Tanpa jaminan", "Limit kredit tinggi"],
        benefits: ["Tanpa jaminan", "Proses cepat", "Bebas penggunaan"],
        risks: ["Bunga lebih tinggi", "Penalti keterlambatan", "Penalti pelunasan dipercepat"],
    },
    {
        title: "Kredit Kendaraan Bermotor (KKB)",
        description: "Kredit kendaraan dengan proses cepat dan mudah",
        icon: <Car className="h-6 w-6" />,
        interest: "6,5% p.a.",
        maxLoan: "Rp 1 Miliar",
        features: ["Mobil baru & bekas", "Asuransi all risk", "Bunga flat"],
        benefits: ["Suku bunga rendah", "Proses cepat", "Pilihan tenor panjang"],
        risks: ["Kendaraan dapat disita jika gagal bayar", "Asuransi wajib", "Biaya administrasi"],
    },
    {
        title: "Kartu Kredit",
        description: "Kartu kredit dengan berbagai program menarik",
        icon: <CreditCard className="h-6 w-6" />,
        interest: "2,25% per bulan",
        maxLoan: "Rp 100 Juta",
        features: ["Cicilan 0%", "Point rewards", "Airport lounge access"],
        benefits: ["Cashback & diskon", "Reward points", "Pembayaran fleksibel"],
        risks: ["Bunga tinggi untuk keterlambatan", "Biaya tahunan", "Denda keterlambatan"],
    },
]

export const KreditPage = () => {
    return (
        <>
            {creditProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    isPopular={true}
                    primaryInfo={{ label: "Bunga", value: product.interest }}
                    secondaryInfo={{ label: "Maks. Pinjaman", value: product.maxLoan }}
                    features={product.features}
                    benefits={product.benefits}
                    risks={product.risks}
                    ctaText="Ajukan Sekarang"
                    onCtaClick={() => console.log(`Ajukan ${product.title}`)}
                />
            ))}
        </>
    )
}