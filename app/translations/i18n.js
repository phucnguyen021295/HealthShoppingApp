/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 06/04/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

require('intl');
require('intl/locale-data/jsonp/vi');

const addLocaleData = require('react-intl').addLocaleData;
const viLocaleData = require('react-intl/locale-data/vi');

import viTranslationMessages from './vi.json';
import enTranslationMessages from './en.json';

const DEFAULT_LOCALE = 'en';
const appLocales = ['vi', 'en'];

addLocaleData(viLocaleData);

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, viTranslationMessages)
            : {};
    debugger;
    return Object.keys(messages).reduce((formattedMessages, key) => {
        let message = messages[key];
        if (!message && locale !== DEFAULT_LOCALE) {
            message = defaultFormattedMessages[key];
        }
        return Object.assign(formattedMessages, {[key]: message});
    }, {});
};

const createFromResourceLanguage = data => {
    return {
        vi: formatTranslationMessages('vi', data.vi),
        en: formatTranslationMessages('en', data.en),
    };
};

const translationMessages = {
    vi: formatTranslationMessages('vi', viTranslationMessages),
    en: formatTranslationMessages('en', enTranslationMessages),
};

// const translationMessages = {
//     vi: viTranslationMessages,
//     en: enTranslationMessages,
// };

exports.translationMessages = translationMessages;
exports.formatTranslationMessages = formatTranslationMessages;
exports.appLocales = appLocales;
exports.createFromResourceLanguage = createFromResourceLanguage;
