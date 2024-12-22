import { DOMAttributes, SVGAttributes } from 'react';

import { FlagIcon } from './data';

export type Props = SVGAttributes<SVGSVGElement> &
  DOMAttributes<SVGSVGElement> & {
    value: keyof typeof FlagIcon;
    manualContainerSize?: number;
  };
