import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

interface LayOutProps {
    children: any
}

export default function DefaultLayOut({ children }: LayOutProps) {
    return (
        <>
            <Header />
            <div className="px-12 mt-[12vh]">
                {children}
            </div>
            <Footer />
        </>
    );
}
