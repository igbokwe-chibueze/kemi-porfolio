import { type SchemaTypeDefinition } from 'sanity'
import profileData from './profile.schema'
import selectedExperiments from './selectedExperiments.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileData, selectedExperiments],
}
