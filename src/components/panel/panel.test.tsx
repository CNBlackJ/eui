/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';

import { EuiPanel, SIZES, COLORS, BORDER_RADII } from './panel';

describe('EuiPanel', () => {
  test('is rendered', () => {
    const component = render(<EuiPanel {...requiredProps} />);

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    describe('hasShadow', () => {
      test('can be false', () => {
        const component = render(<EuiPanel hasShadow={false} />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('grow', () => {
      test('can be false', () => {
        const component = render(<EuiPanel grow={false} />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('paddingSize', () => {
      SIZES.forEach((size) => {
        test(`${size} is rendered`, () => {
          const component = render(<EuiPanel paddingSize={size} />);

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('color', () => {
      COLORS.forEach((color) => {
        test(`${color} is rendered`, () => {
          const component = render(<EuiPanel color={color} />);

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('borderRadius', () => {
      BORDER_RADII.forEach((borderRadius) => {
        test(`${borderRadius} is rendered`, () => {
          const component = render(<EuiPanel borderRadius={borderRadius} />);

          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});
