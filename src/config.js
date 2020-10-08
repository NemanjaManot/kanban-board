export const ThemeConfig = {
  primaryColor: '#1a91db',
  secondaryColor: '#e12a5a',
  tertiaryColor: '#102540',
};

export const kanbanColumns = {
  TO_DO: { type: 'TO_DO', text: 'To Do', color: ThemeConfig.primaryColor },
  IN_PROGRESS: { type: 'IN_PROGRESS', text: 'In Progress', color: ThemeConfig.secondaryColor },
  DONE: { type: 'DONE', text: 'Done', color: ThemeConfig.tertiaryColor },
};
