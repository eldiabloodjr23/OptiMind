"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ab63a651-ed34-4e71-8b5c-9c7da6b83320");
  }, []);

  return null;
};
