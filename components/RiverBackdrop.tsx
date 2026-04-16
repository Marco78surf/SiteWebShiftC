export default function RiverBackdrop() {
  return (
    <div className="river-backdrop" aria-hidden="true">
      <svg
        className="river-svg"
        viewBox="0 0 1000 4000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="river-glow-layer">
          <path className="river-path river-path--glow" d="M500 0 C500 360 500 760 500 1180 C500 1500 500 1910 500 2400 C500 2900 500 3500 500 4000" />
          <path className="river-path river-path--glow" d="M500 240 C430 460 310 760 290 1080 C270 1360 360 1680 430 2050 C490 2360 520 2710 510 3250 C506 3520 504 3800 500 4000" />
          <path className="river-path river-path--glow" d="M500 260 C580 520 700 840 730 1160 C760 1470 680 1750 610 2060 C550 2330 510 2690 502 3240 C500 3510 499 3790 500 4000" />
        </g>

        <g className="river-core-layer">
          <path className="river-path river-path--core" d="M500 0 C500 360 500 760 500 1180 C500 1500 500 1910 500 2400 C500 2900 500 3500 500 4000" />
          <path className="river-path river-path--branch" d="M500 240 C430 460 310 760 290 1080 C270 1360 360 1680 430 2050 C490 2360 520 2710 510 3250 C506 3520 504 3800 500 4000" />
          <path className="river-path river-path--branch" d="M500 260 C580 520 700 840 730 1160 C760 1470 680 1750 610 2060 C550 2330 510 2690 502 3240 C500 3510 499 3790 500 4000" />

          <path className="river-path river-path--twig" d="M420 620 C365 760 275 980 230 1220 C190 1450 205 1670 280 1860 C350 2040 430 2280 470 2660 C495 2930 502 3460 500 4000" />
          <path className="river-path river-path--twig" d="M620 670 C690 860 775 1080 810 1300 C845 1510 820 1730 760 1910 C690 2120 585 2360 535 2700 C510 2970 504 3480 500 4000" />

          <path className="river-path river-path--twig" d="M335 1320 C285 1460 235 1660 245 1850 C255 2060 330 2250 395 2470 C455 2660 492 2960 500 4000" />
          <path className="river-path river-path--twig" d="M690 1380 C735 1530 780 1710 770 1910 C760 2120 695 2320 630 2520 C568 2720 520 3010 500 4000" />

          <path className="river-path river-path--vein" d="M275 2100 C320 2260 398 2450 452 2740 C482 2960 496 3380 500 4000" />
          <path className="river-path river-path--vein" d="M750 2150 C705 2320 620 2500 565 2770 C532 2980 510 3390 500 4000" />
          <path className="river-path river-path--vein" d="M455 1800 C476 2050 495 2580 500 4000" />
          <path className="river-path river-path--vein" d="M545 1780 C526 2070 509 2620 500 4000" />
        </g>
      </svg>
    </div>
  )
}
