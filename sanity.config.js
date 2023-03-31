import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig(({env})=>({
  name: 'default',
  title: 'society-server',

  projectId: env('PROJECT_ID'),
  dataset: env('DATA_SET'),

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
}))
