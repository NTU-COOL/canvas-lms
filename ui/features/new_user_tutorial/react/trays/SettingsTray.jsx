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

const AssignmentsTray = () => (
  <TutorialTrayContent
    heading={I18n.t('Settings')}
    subheading={I18n.t('Change basic settings such as course languages, and the navigation bar')}
    image="/images/tutorial-tray-images/Panda_Map.svg"
    links={[
      {
        label: I18n.t('How do I change the Settings in a course'),
        href: NTU_COOL_USER_MANUAL.CourseSettings[CanvasI18n.locale?.toLowerCase()?.startsWith('zh') ? 'zh' : 'en']
      }
    ]}
  >
    {I18n.t(`On the setting page, you can change the course language, hide
          unnecessary functions from the navigation bar, or set the start and end
          date of the course.`)}
  </TutorialTrayContent>
)

export default AssignmentsTray
