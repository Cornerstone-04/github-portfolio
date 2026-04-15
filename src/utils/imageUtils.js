/**
 * Utility functions for generating randomized repository images
 * Uses Dicebear API to generate deterministic avatars based on repository name
 */

/**
 * Generates a unique, deterministic avatar URL for a repository
 * Same repo name always gets the same image
 *
 * @param {string} repoName - The repository name to generate avatar for
 * @returns {string} URL to the generated avatar image
 */
export const getRepoAvatarUrl = (repoName) => {
  // Using Dicebear API with avataaars style for unique, fun avatars
  // The seed ensures same repo always gets same image
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    repoName,
  )}&scale=80`;
};

/**
 * Alternative: Generate random space-themed images
 * @param {string} repoName - The repository name to generate image for
 * @returns {string} URL to the generated space image
 */
export const getRepoSpaceImageUrl = (repoName) => {
  return `https://api.dicebear.com/7.x/shapes/svg?seed=${encodeURIComponent(
    repoName,
  )}&scale=80`;
};

/**
 * Alternative: Generate random pixel art images
 * @param {string} repoName - The repository name to generate image for
 * @returns {string} URL to the generated pixel art image
 */
export const getRepoPixelArtUrl = (repoName) => {
  return `https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(
    repoName,
  )}&scale=80`;
};
