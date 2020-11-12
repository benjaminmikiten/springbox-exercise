import React from "react";
import { ThemeProvider, css } from "styled-components";

// Flat UI colors from https://www.materialui.co/flatuicolors

const COLORS_PALETTE = {
  turquoise: "#1abc9c",
  emerland: "#2ecc71",
  peterRiver: "#3498db",
  amethyst: "#9b59b6",
  wetAsphalt: "#34495e",
  greenSea: "#16a085",
  nephritis: "#27ae60",
  sunflower: "#f1c40f",
  belizeHole: "#2980b9",
  wisteria: "#8e44ad",
  midnightBlue: "#2c3e50",
  carrot: "#e67e22",
  alizarin: "#e74c3c",
  clouds: "#ecf0f1",
  concrete: "#95a5a6",
  orange: "#f39c12",
  pumpkin: "#d35400",
  pomegranite: "#c0392b",
  silver: "#bdc3c7",
  asbestos: "#7f8c8d",
};

const COLORS_SEMANTIC = {
  background: COLORS_PALETTE.clouds,
  type: COLORS_PALETTE.midnightBlue,
  typeOnDark: COLORS_PALETTE.clouds,
  code: COLORS_PALETTE.clouds,
  codeBackground: COLORS_PALETTE.midnightBlue,
  interactive: COLORS_PALETTE.peterRiver,
  interactiveHover: COLORS_PALETTE.belizeHole,
  footerBackground: COLORS_PALETTE.midnightBlue,
};

const GRID = {
  mobile: {
    breakpoint: 375,
    margin: 18,
    gutter: 16,
    columns: 12,
    maxWidth: 768 - 1,
  },
  tablet: {
    breakpoint: 768,
    maxWidth: 1200 - 1,
    margin: 48,
    gutter: 16,
    columns: 12,
  },
  desktop: {
    maxWidth: 1200,
    breakpoint: 1200,
    margin: 64,
    gutter: 24,
    columns: 12,
  },
};

const DEVICE_WIDTHS = {
  queries: {
    mobile: `(min-width: ${GRID.mobile.breakpoint}px)`,
    mobileOnly: `(max-width: ${GRID.mobile.maxWidth}px)`,
    tablet: `(min-width: ${GRID.tablet.breakpoint}px)`,
    tabletOnly: `(min-width: ${GRID.tablet.breakpoint}px) and (max-width: ${GRID.tablet.maxWidth}px)`,
    desktop: `(min-width: ${GRID.desktop.breakpoint}px)`,
  },
  size: {
    mobile: `${GRID.mobile.breakpoint}px`,
    tablet: `${GRID.tablet.breakpoint}px`,
    desktop: `${GRID.desktop.breakpoint}px`,
  },
};

const GRID_HELPERS = {
  GridParent: css`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: calc(100% + ${GRID.mobile.gutter}px);
    height: calc(100% + ${GRID.mobile.gutter}px);
    margin: calc(${GRID.mobile.gutter} * -0.5px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      width: calc(100% + ${GRID.tablet.gutter}px);
      height: calc(100% + ${GRID.tablet.gutter}px);
      margin: calc(${GRID.tablet.gutter} * -0.5px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      width: calc(100% + ${GRID.desktop.gutter}px);
      height: calc(100% + ${GRID.desktop.gutter}px);
      margin: calc(${GRID.desktop.gutter} * -0.5px);
    }
  `,
  GridChild: css`
    position: relative;
    padding: calc(${GRID.mobile.gutter} * 0.5px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      padding: calc(${GRID.tablet.gutter} * 0.5px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      padding: calc(${GRID.desktop.gutter} * 0.5px);
    }
  `,
  LayoutContainer: css`
    width: 100%;
    margin: 0 auto;
    padding-left: calc(${GRID.mobile.margin}* 1px);
    padding-right: calc(${GRID.mobile.margin}* 1px);
    @media ${DEVICE_WIDTHS.queries.tablet} {
      padding-left: calc(${GRID.tablet.margin}* 1px);
      padding-right: calc(${GRID.tablet.margin}* 1px);
    }
    @media ${DEVICE_WIDTHS.queries.desktop} {
      padding-right: calc(${GRID.desktop.margin}* 1px);
      padding-left: calc(${GRID.desktop.margin}* 1px);
    }
    max-width: 1200px;
  `,
};

const FONTS = {
  default: `'Roboto', sans-serif`,
  mono: `'Source Code Pro', mono`,
};

const TEXT_STYLES = {
  body: css`
    color: ${COLORS_SEMANTIC.type};
    font-family: ${FONTS.default};
    line-height: 1.2;
    font-size: 1rem;
  `,
  code: css`
    color: ${COLORS_SEMANTIC.code};
    font-family: ${FONTS.mono};
    line-height: 2;
    font-size: 1rem;
  `,
  largeTitle: css`
    font-size: 2rem;
    font-weight: 700;
  `,
  mediumTitle: css`
    font-size: 1.25rem;
    font-weight: 700;
  `,
  smallTitle: css`
    font-size: 1rem;
    font-weight: 700;
  `,
  link: css`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.interactive};
    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.interactiveHover};
      }
    }
    &:visited,
    &:active {
      color: ${({ theme }) => theme.colors.interactive};
    }
  `,
  navigationItem: css``,
  siteTitle: css``,
};

const Z_INDEXES = {
  header: 2,
  main: 1,
};

export const ThemeSettings = {
  colors: { ...COLORS_PALETTE, ...COLORS_SEMANTIC },
  fonts: FONTS,
  textStyles: TEXT_STYLES,
  grid: { ...GRID, ...GRID_HELPERS },
  devices: DEVICE_WIDTHS.queries,
  zIndexes: Z_INDEXES,
};

const Theme = ({ children }) => <ThemeProvider theme={ThemeSettings}>{children}</ThemeProvider>;
export default Theme;
