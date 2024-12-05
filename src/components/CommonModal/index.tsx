import React from "react";

export default function Modal({
    isOpen,
    onClose,
    children,
    title,
    className
}: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-600"
            style={{ opacity: isOpen ? 1 : 0 }}
            onClick={onClose}
        >
            <div
                style={{
                    borderRadius: "500px / 30px",
                    boxShadow: "0px 0px 50px #773d05",
                    backgroundPosition: "-40px 0"
                }}
                className={`min-w-[700px] h-[500px] bg-[url('/assets/image/banner/subpage_bg.jpg')] bg-no-repeat border-solid border-[2px] flex justify-center items-center flex-col border-[#fee188] bg-white  p-6 shadow-lg transition-transform duration-300 transform ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
                    } ${className}`}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
                <div>{children}</div>
            </div>
        </div>
    );
}