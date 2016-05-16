

var tour = {
  id: 'hello-hopscotch',
  steps: [
    {
      target: 'screenshot',
      title: 'Hi!',
      content: 'We\'re just building the action plan for your website, so in the meantime we want to show you how a couple of things work around here...<p class="pageId">Step 1 of 9</p>',
      placement: 'top',
      arrowOffset: 0,
      zindex: 2,
      xOffset: 'center',
      yOffset: 350,
      width: 450,
      onNext: function() {
        arrowShow();
      } //end onNext
    },
    {
      target: 'action',
      title: 'Action Tile',
      content: 'This tile is called an "Action". When you click on it, detailed information will appear..<p class="pageId">Step 2 of 9</p>',
      placement: 'right',
      arrowOffset: 75,
      zindex: 2,
      xOffset: '0',
      yOffset: '-75',
      width: 450,
      highlight: true,
      onPrev: function() {
        arrowHide();
      },
      onNext: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-2-actioninfo.png)");
        arrowHide();
      } //end onNext
    },
    {
      target: 'actiondesc',
      title: 'Action Information',
      content: 'Your step-by-step instructions tell you exactly how to get the job done and include expert tips and hints.<p class="pageId">Step 3 of 9</p>',
      placement: 'top',
      arrowOffset: 0,
      zindex: 2,
      highlight: true,
      xOffset: 'center',
      yOffset: 'center',
      onPrev: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-1-actionplan.png)");
        arrowShow();
      },
      onNext: function() {
        arrowShow();
      }
    },
    {
      target: 'exporttocsv',
      title: 'Export to CSV',
      content: 'You can easily download a list of the pages you need to fix by hitting this button.<p class="pageId">Step 4 of 9</p>',
      placement: 'left',
      arrowOffset: 0,
      zindex: 2,
      xOffset: 0,
      yOffset: -20,
      highlight: true,
      onPrev: function() {
        arrowHide();
      },
      onNext: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-1-actionplan.png)");
        arrowShow();
      }
    },
    {
      target: 'actionstab',
      title: 'Ready to add more actions to your plan?',
      content: 'You can explore all the latest recommendations we\'ve generated for your website in the Actions tab at anytime. <p class="pageId">Step 5 of 9</p>',
      placement: 'bottom',
      arrowOffset: 50,
      zindex: 2,
      xOffset: 60,
      yOffset: 0,
      width: 450,
      highlight: true,
      onPrev: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-2-actioninfo.png)");
        arrowShow();
      },
      onNext: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-3-actions.png)");
        arrowShow();
      }
    },
    {
      target: 'filter',
      title: 'Looking for a specific action?',
      content: 'Filter the type of action you want to see by category, time or difficulty.<p class="pageId">Step 6 of 9</p>',
      placement: 'right',
      arrowOffset: 30,
      zindex: 2,
      xOffset: 0,
      yOffset: 0,
      highlight: true,
      onPrev: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-1-actionplan.png)");
        arrowShow();
      },
      onNext: function() {
        arrowShow();
      }
    },
    {
      target: 'healthcheck',
      title: 'Healthcheck Actions',
      content: 'Check at the top of the page to see the general housekeeping actions we have lined up for you. Add these to your action plan to make sure you keep your website in good order!<p class="pageId">Step 7 of 9</p>',
      placement: 'top',
      arrowOffset: 410,
      zindex: 2,
      xOffset: 580,
      yOffset: 0,
      width: 450,
      highlight: true,
      onPrev: function() {
        arrowShow();
      },
      onNext: function() {
        arrowShow();
      }
    },
    {
      target: 'performance',
      title: 'Performance Actions',
      content: 'While the \'Power-Up\' actions we have waiting for you down here are based on what your competitors are doing and will help to boost your position in Google.<p class="pageId">Step 8 of 9</p>',
      placement: 'top',
      arrowOffset: 410,
      zindex: 2,
      xOffset: 510,
      yOffset: 0,
      width: 450,
      highlight: true,
      onPrev: function() {
        arrowShow();
      },
      onNext: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-4-setup.png)");
        arrowHide();
      }
    },
    {
      target: 'screenshot',
      title: 'Project Setup',
      content: 'Finally you can customise your project at any time in the Project Setup tab. You can update and edit your project setup details here.<p class="pageId">Step 9 of 9</p>',
      placement: 'top',
      arrowOffset: 0,
      zindex: 2,
      xOffset: 'center',
      yOffset: 350,
      width: 450,
      onPrev: function() {
        $('#screenshot').css("background-image", "url(img/ss/ss-3-actions.png)");
        arrowShow();
      },
      onNext: function() {
        arrowShow();
      }
    }
  ],
  showPrevButton: true,
  scrollTopMargin: 100,
  showCloseButton: false,
  onStart: function() {
      arrowHide();
  } // end onStart
};

hopscotch.startTour(tour); // Tour start
