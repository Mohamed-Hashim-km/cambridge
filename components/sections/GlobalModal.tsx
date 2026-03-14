"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import EnquiryModalWrapper from "./EnquiryModalWrapper";

export default function GlobalModal() {
  const { isEnquiryModalOpen, closeEnquiryModal } = useModal();

  return (
    <EnquiryModalWrapper isOpen={isEnquiryModalOpen} onClose={closeEnquiryModal} />
  );
}
