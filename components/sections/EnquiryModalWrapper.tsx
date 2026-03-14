import { Suspense } from "react";
import EnquiryModal from "./EnquiryModal";

interface EnquiryModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModalWrapper({ isOpen, onClose }: EnquiryModalWrapperProps) {
  return (
    <Suspense fallback={null}>
      <EnquiryModal isOpen={isOpen} onClose={onClose} />
    </Suspense>
  );
}
