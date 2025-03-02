import {Car, GraduationCap, Heart, LineChart, UserCheck} from "lucide-react";
import ProductCard from "@/components/product-card.tsx";

const insuranceProducts = [
    {
        title: "Unit Link",
        description: "Kombinasi asuransi jiwa dan investasi",
        icon: <LineChart className="h-6 w-6" />,
        premium: "Rp 500.000/bulan",
        coverage: "Mulai Rp 100 Juta",
        isPopular: true,
        features: ["Proteksi jiwa", "Pilihan investasi", "Top up fleksibel", "Withdrawal parsial"],
        benefits: [
            "Proteksi dan investasi",
            "Manfaat kematian",
            "Nilai investasi bisa dicairkan",
            "Bebas pilih instrumen investasi",
        ],
        risks: [
            "Return investasi tidak dijamin",
            "Biaya asuransi meningkat seiring usia",
            "Risiko pasar pada portofolio investasi",
        ],
    },
    {
        title: "Asuransi Kesehatan",
        description: "Perlindungan kesehatan menyeluruh",
        icon: <Heart className="h-6 w-6" />,
        premium: "Rp 300.000/bulan",
        coverage: "Rp 1 Miliar/tahun",
        features: ["Rawat inap", "Rawat jalan", "Perawatan gigi", "Persalinan"],
        benefits: ["Jaringan RS luas", "Cashless treatment", "Kamar privat", "Evakuasi medis"],
        risks: ["Masa tunggu", "Pengecualian penyakit", "Premi meningkat seiring usia"],
    },
    {
        title: "Asuransi Pendidikan",
        description: "Jaminan pendidikan anak hingga kuliah",
        icon: <GraduationCap className="h-6 w-6" />,
        premium: "Rp 500.000/bulan",
        coverage: "Sesuai tahapan pendidikan",
        features: ["Dana tahapan terjadwal", "Beasiswa prestasi", "Proteksi jiwa orangtua", "Bonus loyalitas"],
        benefits: ["Dana pendidikan terjamin", "Proteksi jiwa", "Nilai investasi", "Beasiswa anak berprestasi"],
        risks: ["Return investasi tidak dijamin", "Penalti penarikan dini", "Nilai manfaat vs inflasi pendidikan"],
    },
    {
        title: "Asuransi Jiwa",
        description: "Perlindungan finansial untuk keluarga",
        icon: <UserCheck className="h-6 w-6" />,
        premium: "Rp 250.000/bulan",
        coverage: "Rp 500 Juta",
        features: ["Uang pertanggungan tinggi", "Premi terjangkau", "Tambahan critical illness", "Pembebasan premi"],
        benefits: ["Proteksi meninggal dunia", "Santunan kecelakaan", "Penyakit kritis", "Warisan keluarga"],
        risks: ["Masa tunggu", "Pengecualian klaim", "Pembatalan polis"],
    },
    {
        title: "Asuransi Kendaraan",
        description: "Perlindungan komprehensif kendaraan",
        icon: <Car className="h-6 w-6" />,
        premium: "2-3% dari harga kendaraan/tahun",
        coverage: "All Risk & TLO",
        features: ["All risk coverage", "Bengkel rekanan", "Derek 24 jam", "Klaim mudah"],
        benefits: ["Ganti rugi kerusakan", "Kehilangan total", "Tanggung jawab pihak ketiga", "Assistance 24/7"],
        risks: ["Depresiasi nilai", "Risiko tidak tercover", "Pembatasan wilayah"],
    },
]

export const AsuransiPage = () => {
    return (
        <>
            {insuranceProducts.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    icon={product.icon}
                    isPopular={true}
                    primaryInfo={{ label: "Premi", value: product.premium }}
                    secondaryInfo={{ label: "Nilai Pertanggungan", value: product.coverage }}
                    features={product.features}
                    benefits={product.benefits}
                    risks={product.risks}
                    ctaText="Pilih Plan"
                    onCtaClick={() => console.log(`Pilih ${product.title}`)}
                />
            ))}
        </>
    )
}