/**
 * Copyright 2016-present, Bkav, Cop.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author phucnhb@bkav.com on 25/03/2021.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */
'use strict';

import React, {PureComponent} from 'react';
import * as PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';

import Text from './app/base/components/Text';
import {LanguageContext} from './ContextProvider';

export class LanguageProvider extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {language} = this.context;
        const _language = !language || language === 'vi' ? 'vi' : 'en';
        const {messages, children} = this.props;

        return (
            <IntlProvider
                locale={_language}
                key={_language}
                messages={messages[_language]}
                textComponent={Text}>
                {React.Children.only(children)}
            </IntlProvider>
        );
    }
}

LanguageProvider.propTypes = {
    locale: PropTypes.string,
    messages: PropTypes.object,
    children: PropTypes.element.isRequired,
};

LanguageProvider.contextType = LanguageContext;

export default LanguageProvider;
