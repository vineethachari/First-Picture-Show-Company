import { Link } from "react-router-dom";

/** 
 * FPSC Logo mark — reconstructed from the original SVG at
 * firstpictureshowcompany.com/en/wp-content/uploads/2023/07/Logo.svg
 * 
 * The original has two layers:
 *   .st0 { fill: #FCCB3D }   — golden shapes (filmstrip + "FIRST PICTURE SHOW COMPANY" letters)
 *   .st1 { fill: none; stroke: #000; stroke-width: 6 }  — black outline circles
 *
 * We use the CDN-hosted version directly to stay exact.
 */
export function FPSCLogo({ className = "", height = 40 }: { className?: string; height?: number }) {
  return (
    <img
      src="https://firstpictureshowcompany.com/en/wp-content/uploads/2023/07/Logo.svg"
      alt="First Picture Show Company"
      style={{ height: `${height}px`, width: "auto" }}
      className={className}
    />
  );
}

/**
 * Full logo lockup — the SVG logo image linked home
 */
export default function LogoLink({ height = 40 }: { height?: number }) {
  return (
    <Link to="/" className="flex items-center group" aria-label="First Picture Show Company — Home">
      <FPSCLogo height={height} className="fpsc-logo-svg" />
    </Link>
  );
}
