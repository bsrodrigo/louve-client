import { SingingBirdSvg } from "./singing-bird";

export interface RenderSvgItemProps {
  width?: number | string;
  height?: number | string;
}

export type SvgItemTypes = "SINGING_BIRD";

export interface RenderSvgProps {
  width?: number | string;
  height?: number | string;
  type: SvgItemTypes;
}

export interface SvgItem {
  type: SvgItemTypes;
  SvgElement: React.FC<RenderSvgItemProps>;
}

const svgList: SvgItem[] = [
  {
    type: "SINGING_BIRD",
    SvgElement: SingingBirdSvg,
  },
];

export const RenderSvg = ({
  width,
  height,
  type,
}: RenderSvgProps): JSX.Element => {
  const { SvgElement } = svgList.find((item) => item.type === type) || {};
  if (!SvgElement) return <></>;

  return <SvgElement width={width} height={height} />;
};
