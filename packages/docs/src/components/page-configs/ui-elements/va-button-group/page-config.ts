import { ApiDocsBlock } from '../../../../types/configTypes'
import { DocsHelper } from '../../../../helpers/DocsHelper'
import VaButtonGroup from 'vuestic-ui/src/components/va-button-group/VaButtonGroup.vue'
import apiOptions from './api-options'

const config: ApiDocsBlock[] = [
  DocsHelper.title('buttonGroup.title'),
  DocsHelper.paragraph('buttonGroup.summaryText'),

  DocsHelper.subtitle('all.examples'),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.default.title',
    'buttonGroup.examples.default.text',
    'va-button-group/Default',
  ),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.colors.title',
    'buttonGroup.examples.colors.text',
    'va-button-group/Colors',
  ),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.gradient.title',
    'buttonGroup.examples.gradient.text',
    'va-button-group/Gradient',
  ),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.sizes.title',
    'buttonGroup.examples.sizes.text',
    'va-button-group/Sizes',
  ),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.styles.title',
    'buttonGroup.examples.styles.text',
    'va-button-group/Styles',
  ),
  ...DocsHelper.exampleBlock(
    'buttonGroup.examples.icons.title',
    'buttonGroup.examples.icons.text',
    'va-button-group/Icons',
  ),

  DocsHelper.subtitle('all.api'),
  DocsHelper.api(VaButtonGroup, apiOptions),
]

export default config
