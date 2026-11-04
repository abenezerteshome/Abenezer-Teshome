"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button className="button button-primary print-button" onClick={() => window.print()} type="button">
      <Printer size={16} /> Print / save as PDF
    </button>
  );
}
