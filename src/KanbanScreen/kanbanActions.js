export const ActionTypes = {
  TEST: 'TEST',
};

export const ActionCreators = {
  testAction: (testState) => {
    return {
      type: ActionTypes.TEST,
      testState,
    };
  },
};
