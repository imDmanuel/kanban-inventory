// Tremor Raw chartColors [v0.0.0]

export type ColorUtility = "bg" | "stroke" | "fill" | "text";

export const chartColors = {
  ordered: {
    bg: "bg-[#DF9B2D]",
    stroke: "stroke-[#DF9B2D]",
    fill: "fill-[#DF9B2D]",
    text: "text-[#DF9B2D]",
  },
  delivered: {
    bg: "bg-[#B6D3FA]",
    stroke: "stroke-[#B6D3FA]",
    fill: "fill-[#B6D3FA]",
    text: "text-[#B6D3FA]",
  },
  purchase: {
    bg: "bg-[#74B0FA]",
    stroke: "stroke-[#74B0FA]",
    fill: "fill-[#74B0FA]",
    text: "text-[#74B0FA]",
  },
  sales: {
    bg: "bg-[#51CC5D]",
    stroke: "stroke-[#51CC5D]",
    fill: "fill-[#51CC5D]",
    text: "text-[#51CC5D]",
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string;
  };
};

export type AvailableChartColorsKeys = keyof typeof chartColors;

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors
) as Array<AvailableChartColorsKeys>;

export const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[]
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>();
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length]);
  });
  return categoryColors;
};

export const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility
): string => {
  const fallbackColor = {
    bg: "bg-success-500",
    stroke: "stroke-success-500",
    fill: "fill-success-500",
    text: "text-success-500",
  };
  return chartColors[color]?.[type] ?? fallbackColor[type];
};

// Tremor Raw getYAxisDomain [v0.0.0]

export const getYAxisDomain = (
  autoMinValue: boolean,
  minValue: number | undefined,
  maxValue: number | undefined
) => {
  const minDomain = autoMinValue ? "auto" : minValue ?? 0;
  const maxDomain = maxValue ?? "auto";
  return [minDomain, maxDomain];
};

// Tremor Raw hasOnlyOneValueForKey [v0.1.0]

export function hasOnlyOneValueForKey(
  array: any[],
  keyToCheck: string
): boolean {
  const val: any[] = [];

  for (const obj of array) {
    if (Object.prototype.hasOwnProperty.call(obj, keyToCheck)) {
      val.push(obj[keyToCheck]);
      if (val.length > 1) {
        return false;
      }
    }
  }

  return true;
}
