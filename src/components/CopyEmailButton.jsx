import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { email } from "../data/portfolioData.js";

// The primary contact links deep-link into Gmail's web compose, which only
// works for visitors signed into Gmail in that browser. This gives everyone
// else (Outlook, Apple Mail, a different Google account, mobile) a way to
// actually get the address.
export default function CopyEmailButton({ className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — nothing to fall
      // back to here, the visible email text next to this button still works.
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={className}
      aria-label={copied ? "Email address copied to clipboard" : `Copy email address, ${email}`}
    >
      <Icon name={copied ? "check" : "mail"} className="h-3.5 w-3.5" />
      {copied ? "Copied!" : "Copy email"}
    </motion.button>
  );
}
