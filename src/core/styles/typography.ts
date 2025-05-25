import styled from "styled-components";

export const fontSize = (
  fontMin: number,
  fontMax: number,
  screenMin = 375,
  screenMax = 1920
) => `
  font-size: calc(${fontMin}px + (${fontMax} - ${fontMin}) * ((100vw - ${screenMin}px) / (${screenMax} - ${screenMin})));
`;

type TypographyType = {
  fontMin: number;
  fontMax: number;
  lineHeight: number;
  fontWeight: number;
};

// изначально заложила ф-ю масштабирования шрифтов для адаптива
// т.к. адаптива нет, решила ф-ю не убирать, поэтому мин и макс размер шрифта одинаковый
// в будущем, если потребуется адаптив, можно задать мин размер шрифтов для мобилок, и шрифт будет плавно изменять размер от своих min и max значений
export const createTypography = ({
  fontMin,
  fontMax,
  lineHeight,
  fontWeight,
}: TypographyType) => {
  return `font-weight: ${fontWeight}; font-family: 'Onest'; line-height: ${lineHeight};
          ${fontSize?.(fontMin, fontMax)}`;
};

export const typography = {
  font_size: {
    base: "16px",
  },
  line_height: {
    default: "1.5",
  },
  font_weight: {
    medium: 500,
  },
  body_small: createTypography({
    fontMin: 13,
    fontMax: 13,
    lineHeight: 1.23,
    fontWeight: 400,
  }),
  body_regular: createTypography({
    fontMin: 16,
    fontMax: 16,
    lineHeight: 1.5,
    fontWeight: 400,
  }),
  body_medium: createTypography({
    fontMin: 16,
    fontMax: 16,
    lineHeight: 1.5,
    fontWeight: 500,
  }),
  title_large: createTypography({
    fontMin: 40,
    fontMax: 40,
    lineHeight: 1.1,
    fontWeight: 700,
  }),
  title_medium: createTypography({
    fontMin: 16,
    fontMax: 16,
    lineHeight: 1.25,
    fontWeight: 700,
  }),
  subtitle: createTypography({
    fontMin: 28,
    fontMax: 28,
    lineHeight: 1.14,
    fontWeight: 700,
  }),
  card_title: createTypography({
    fontMin: 20,
    fontMax: 20,
    lineHeight: 1.2,
    fontWeight: 700,
  }),
  card_body: createTypography({
    fontMin: 16,
    fontMax: 16,
    lineHeight: 1.5,
    fontWeight: 400,
  }),
};

export const Title = styled.h1`
  ${typography.title_large};
`;

export const Subtitle = styled.h2`
  ${typography.subtitle};
`;

export const Text = styled.p`
  ${typography.body_regular};
`;