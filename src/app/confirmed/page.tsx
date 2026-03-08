import type { Metadata } from "next";
import ConfirmedContent from "./ConfirmedContent";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "You're Registered! | BFM Live Training with Dr. Rob DeMartino, DC",
  description:
    "Your spot is confirmed for the free BFM Live Training on March 14th.",
};

export default function ConfirmedPage() {
  return (
    <>
      <main id="main-content" className="mx-auto max-w-[680px] px-5 py-20 text-center">
        <ConfirmedContent />
      </main>
      <Footer />
    </>
  );
}
