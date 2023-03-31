import {defineCliConfig} from 'sanity/cli'


export default defineCliConfig(({env})=>({
  api: {
    projectId: env('PROJECT_ID'),
    dataset: env('DATA_SET'),
  },
}))
