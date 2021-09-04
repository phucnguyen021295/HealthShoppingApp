/**
 * Copyright 2016-present.
 * All rights reserved.
 *
 * This source code is licensed under the  license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author  on 9/20/20.
 *
 * History:
 * @modifier abc@.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

const OpenSans = {
  OpenSans: 'OpenSans',
  OpenSansBold: 'OpenSans-Bold',
  OpenSansItalic: 'OpenSans-Italic',
  OpenSansLight: 'OpenSans-Light',
  OpenSansRegular: 'OpenSans-Regular',
  OpenSansSemiBold: 'OpenSans-SemiBold',
};

const Roboto = {
  RobotoLight: 'Roboto-Light',
  RobotoMedium: 'Roboto-Medium',
  RobotoRegular: 'Roboto-Regular',
  RobotoThin: 'Roboto-Thin',
  RobotoSemiBold: 'Roboto-SemiBold',
};

const FontDefault = 'OpenSans';

const _LightText = {
  OpenSans: OpenSans.OpenSansLight,
  Roboto: Roboto.RobotoLight,
};
const LightText = _LightText[FontDefault];

const _MediumText = {
  OpenSans: OpenSans.OpenSansBold,
  Roboto: Roboto.RobotoMedium,
};
const MediumText = _MediumText[FontDefault];

const _RegularText = {
  OpenSans: OpenSans.OpenSansRegular,
  Roboto: Roboto.RobotoRegular,
};
const RegularText = _RegularText[FontDefault];

const _ThinText = {
  OpenSans: OpenSans.OpenSansLight,
  Roboto: Roboto.RobotoThin,
};
const ThinText = _ThinText[FontDefault];

const _SimiBoldText = {
  OpenSans: OpenSans.OpenSansSemiBold,
  Roboto: Roboto.RobotoSemiBold,
};
const SimiBoldText = _SimiBoldText[FontDefault];

export {LightText, MediumText, RegularText, ThinText, SimiBoldText};
