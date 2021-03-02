const page1Controller = (req, res) => {
  res.render("screens/page1");
};

const page2Controller = (req, res) => {
  res.render("screens/page2");
};

const page3Controller = (req, res) => {
  res.render("screens/page3");
};

const pageController = {
  page1Controller,
  page2Controller,
  page3Controller,
};

export default pageController;

// 1. src -> app.js
// 2. "/", pageRouter 으로 들어간다.
