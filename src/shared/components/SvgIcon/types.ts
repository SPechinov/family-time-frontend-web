import { DOMAttributes, SVGAttributes } from 'react';

import { SvgIcons } from '.';

export type SvgIconProps = SVGAttributes<SVGSVGElement> &
  DOMAttributes<SVGSVGElement> & {
    value: keyof typeof SvgIcons;
    manualContainerSize?: number;
  };
