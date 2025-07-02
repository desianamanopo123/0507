// src/ai/flows/project-recommendation.ts
'use server';

/**
 * @fileOverview Recommends the best project arrangement based on AI analysis of user interaction data.
 *
 * - getProjectRecommendations - A function that handles the project recommendation process.
 * - ProjectRecommendationInput - The input type for the getProjectRecommendations function.
 * - ProjectRecommendationOutput - The return type for the getProjectRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSchema = z.object({
  id: z.string().describe('Unique identifier for the project.'),
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A brief description of the project.'),
  url: z.string().url().describe('URL to the live demo or repository of the project.'),
  interactions: z.number().int().nonnegative().describe('Number of user interactions (e.g., clicks, views) with the project.'),
});

const ProjectRecommendationInputSchema = z.object({
  projects: z.array(ProjectSchema).describe('An array of project objects with their details and interaction data.'),
  userQuery: z.string().optional().describe('Optional user query for personalized project recommendations.'),
});
export type ProjectRecommendationInput = z.infer<typeof ProjectRecommendationInputSchema>;

const ProjectRecommendationOutputSchema = z.object({
  recommendedOrder: z.array(z.string()).describe('An array of project IDs representing the recommended order to display the projects.'),
  reasoning: z.string().describe('Explanation of why this order is recommended.'),
});
export type ProjectRecommendationOutput = z.infer<typeof ProjectRecommendationOutputSchema>;

export async function getProjectRecommendations(input: ProjectRecommendationInput): Promise<ProjectRecommendationOutput> {
  return projectRecommendationFlow(input);
}

const projectRecommendationPrompt = ai.definePrompt({
  name: 'projectRecommendationPrompt',
  input: {schema: ProjectRecommendationInputSchema},
  output: {schema: ProjectRecommendationOutputSchema},
  prompt: `You are an AI assistant that recommends the best arrangement of projects in a portfolio to highlight the best works.

  Analyze the provided project data and user interaction metrics to determine an optimal display order.

  Consider these factors:
    - Projects with higher user interaction should be prioritized.
    - If a user query is provided, projects relevant to the query should be given higher priority.
    - Projects with a compelling description should be highlighted.

  Projects:
  {{#each projects}}
    ID: {{id}}
    Title: {{title}}
    Description: {{description}}
    URL: {{url}}
    Interactions: {{interactions}}
  {{/each}}

  User Query: {{userQuery}}

  Based on this information, provide a recommended order of project IDs and explain your reasoning.
  Ensure that the response is valid JSON according to the ProjectRecommendationOutputSchema.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const projectRecommendationFlow = ai.defineFlow(
  {
    name: 'projectRecommendationFlow',
    inputSchema: ProjectRecommendationInputSchema,
    outputSchema: ProjectRecommendationOutputSchema,
  },
  async input => {
    const {output} = await projectRecommendationPrompt(input);
    return output!;
  }
);
