"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("93654109-d184-4b6b-b81e-c599ceadaf82");
  });

  return null;
}

export default CrispChat;