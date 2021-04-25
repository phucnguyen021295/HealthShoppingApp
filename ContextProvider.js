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
import global from './app/global';
import {getLanguage} from './app/core/storage';

export const LanguageContext = React.createContext();

class ContextComponent extends PureComponent {
  constructor(props) {
    super(props);
    // TODO can xem lai logic code cho nay
    let language = global.Language;
    this.state = {
      language: language || 'vi',
    };
  }

  async componentDidMount() {
    const language = await getLanguage();
    if (language !== this.state.language) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        language: language || 'vi',
      });
    }
  }

  render() {
    if (!this.state.language) {
      return null;
    }
    return (
      <LanguageContext.Provider
        value={{
          ...this.state,
          updateLanguage: (language) => this.setState({language: language}),
        }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

ContextComponent.propTypes = {
  language: PropTypes.string,
};

export default ContextComponent;
