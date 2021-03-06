/* eslint-disable */
import React from 'react';
import cx from 'clsx';
import SpriteSymbol from '$$symbolRequest$$';
import sprite from '$$spriteRequest$$';

const symbol = new SpriteSymbol($$stringifiedSymbol$$);
sprite.add(symbol);

const SvgSpriteIcon = function SvgSpriteIcon(props = {}) {
  const {
    viewBox: propViewBox,
    width: propWidth,
    height: propHeight,
    className,
    ...restProps
  } = props;
  const viewBox = propViewBox || symbol.viewBox;
  const vParts = viewBox.split(' ');
  const vW = vParts[2];
  const vH = vParts[3];

  const aspectRatio = React.useMemo(() => Number(vW) / Number(vH), [vW, vH]);

  const width = propWidth || Math.floor(propHeight * aspectRatio) || symbol.width || '1em';
  const height = propHeight || Math.floor(propWidth / aspectRatio) || symbol.height || '1em';

  return React.createElement(
    'svg',
    {
      viewBox,
      width,
      height,
      className: cx('c-sprite-icon', className),
      ...restProps,
    },
    React.createElement('use', {
      xlinkHref: '#' + symbol.id,
    }),
  );
};

SvgSpriteIcon.viewBox = symbol.viewBox;
SvgSpriteIcon.id = symbol.id;
SvgSpriteIcon.content = symbol.content;
SvgSpriteIcon.url = symbol.url;
SvgSpriteIcon.toString = symbol.toString;

const MemoSvgSpriteIcon = React.memo(SvgSpriteIcon);
MemoSvgSpriteIcon.displayName = `SvgSpriteIcon_${symbol.id}`;
export default MemoSvgSpriteIcon;
