var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'screenshot',
      title: 'Add to Plan',
      content: 'Press "Add to Plan" to add this action to your plan.',
      placement: 'bottom',
      arrowOffset: 60,
      zindex: 2,
      xOffset: 500,
      yOffset: -350
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100
};

hopscotch.startTour(tour); // Tour start
