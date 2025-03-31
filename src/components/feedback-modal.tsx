import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface FeedbackModalProps {
    isOpen: boolean
    onClose: () => void
    onFinish: () => void
}

export default function FeedbackModal({ isOpen, onClose, onFinish }: FeedbackModalProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Selesaikan Simulasi</AlertDialogTitle>
                    <AlertDialogDescription>Apakah Anda yakin ingin menyelesaikan simulasi? Setelah ini anda tidak bisa menambah hadiah.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Tidak, saya ingin melanjutkan simulasi</AlertDialogCancel>
                    <AlertDialogAction className="bg-blue-600" onClick={onFinish}>Yakin, saya selesai</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

