import { Home, PiggyBank, CreditCard, TrendingUp, Shield } from "lucide-react"
import {JSX} from "react";
import {Link} from "react-router";

export default function BottomNav() {
    return (
        <nav className="sticky bottom-0 bg-white border-t border-gray-200 py-2 md:py-3">
            <div className="max-w-6xl mx-auto flex justify-around">
                <NavItem href="/app/beranda" icon={<Home className="w-5 h-5" />} label="Beranda" />
                <NavItem href="/app/tabungan" icon={<PiggyBank className="w-5 h-5" />} label="Tabungan" />
                <NavItem href="/app/kredit" icon={<CreditCard className="w-5 h-5" />} label="Kredit" />
                <NavItem href="/app/investasi" icon={<TrendingUp className="w-5 h-5" />} label="Investasi" />
                <NavItem href="/app/asuransi" icon={<Shield className="w-5 h-5" />} label="Asuransi" />
            </div>
        </nav>
    )
}

function NavItem({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) {
    return (
        <Link to={href} className="flex flex-col items-center justify-center px-2">
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </Link>
    )
}