export const themeConfig = {
  primaryColor: '#1a91db',
  secondaryColor: '#e12a5a',
  tertiaryColor: '#102540',
};

export const kanbanColumns = {
  TO_DO: { type: 'TO_DO', text: 'To Do', color: themeConfig.primaryColor },
  IN_PROGRESS: { type: 'IN_PROGRESS', text: 'In Progress', color: themeConfig.secondaryColor },
  DONE: { type: 'DONE', text: 'Done', color: themeConfig.tertiaryColor },
};
