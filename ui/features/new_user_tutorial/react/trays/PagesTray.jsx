/*
 * Copyright (C) 2017 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import CanvasI18n, {useScope as useI18nScope} from '@canvas/i18n'
import TutorialTrayContent from './TutorialTrayContent'
import { NTU_COOL_USER_MANUAL } from './NTUCOOLConstants'

const I18n = useI18nScope('new_user_tutorial')

const PagesTray = () => (
  <TutorialTrayContent
    heading={I18n.t('Pages')}
    subheading={I18n.t('Create and compile educational resources')}
    image="/images/tutorial-tray-images/Panda_Pages.svg"
    imageWidth="14.5rem"
    links={[
      {
        label: I18n.t('How do I edit Pages'),
        href: NTU_COOL_USER_MANUAL.PagesEditing[CanvasI18n.locale?.toLowerCase()?.startsWith('zh') ? 'zh' : 'en']
      }
    ]}
  >
    {I18n.t(`Teachers and TAs can build Pages containing content and educational
          resources that help students learn but aren't assignments. Include text,
          multimedia, and links to files and external resources. Students can also
          create content on Pages if they were given the authority by teachers or
          teaching assistants.`)}
  </TutorialTrayContent>
)

export default PagesTray
