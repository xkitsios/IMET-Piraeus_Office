/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
// import GitHubIcon from "@mui/icons-material/GitHub";
// import AccountTreeIcon from '@mui/icons-material/AccountTree';

// Pages
// import OurTeam from "layouts/pages/landing-pages/our-team";
import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import SignIn from "layouts/pages/authentication/sign-in";

// Profiles
// import Author from "layouts/pages/landing-pages/author";
import Anagnos from "layouts/pages/profiles-pages/anagnostopoulou-page";
import Akac from "layouts/pages/profiles-pages/attilas-page";
import Kitsios from "layouts/pages/profiles-pages/kitsios-page";
import Pappa from "layouts/pages/profiles-pages/pappa-page";

// Projects
import Am4Infra from "layouts/pages/projects-pages/am4infra-page";
import BeOpen from "layouts/pages/projects-pages/beopen-page";
import Impacts from "layouts/pages/projects-pages/impacts-page";
import OptiShip from "layouts/pages/projects-pages/optiship-page";
import Scilake from "layouts/pages/projects-pages/scilake-page";
import Scope from "layouts/pages/projects-pages/scope-page";

// Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Projects",
    icon: <Icon>dashboard</Icon>,
    // columns: 1,
    // rowsPerColumn: 2,
    collapse: [
      // {
      //   name: "about us",
      //   route: "/pages/landing-pages/about-us",
      //   component: <AboutUs />,
      // },
      // {
      //   name: "contact us",
      //   route: "/pages/landing-pages/contact-us",
      //   component: <ContactUs />,
      // },
      {
        name: "AM4INFRA",
        route: "/projects/am4infra",
        component: <Am4Infra />,
      },
      {
        name: "BE OPEN",
        route: "/projects/beopen",
        component: <BeOpen />,
      },
      {
        name: "IMPACTS",
        route: "/projects/impacts",
        component: <Impacts />,
      },
      {
        name: "OptiShip",
        route: "/projects/optiship",
        component: <OptiShip />,
      },
      {
        name: "SciLake",
        route: "/projects/scilake",
        component: <Scilake />,
      },
      {
        name: "SCOPE",
        route: "/projects/scope",
        component: <Scope />,
      },
      // {
      //   name: "Author",
      //   route: "/pages/landing-pages/author",
      //   component: <Author />,
      // },
    ],
  },
  {
    name: "Our Team",
    icon: <Icon>people</Icon>,
    route: "/our-team",
    component: <AboutUs />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Head",
        collapse: [
          {
            name: "Afroditi Anagnostopoulou",
            route: "/our-team/anagnostopoulou",
            component: <Anagnos />,
          },
        ],
      },
      {
        name: "Researchers",
        collapse: [
          {
            name: "Attila Akac",
            route: "/our-team/akac",
            component: <Akac />,
          },
          {
            name: "Xenophon Kitsios",
            route: "/our-team/kitsios",
            component: <Kitsios />,
          },
          {
            name: "Ioanna Pappa",
            route: "/our-team/pappa",
            component: <Pappa />,
          },
        ],
      },
    ],
  },
  // {
  //   name: "Structure",
  //   icon: <AccountTreeIcon/ >,
  // },
  {
    name: "About Us",
    icon: <Icon>info</Icon>,
    collapse: [
      {
        name: "Visit HIT",
        description: "Hellenic Institute of Transport",
        href: "https://www.imet.gr/index.php/en/",
      },
      {
        name: "Visit CERTH",
        description: "Center for Research & Technology Hellas",
        href: "https://www.certh.gr/root.en.aspx",
      },
      // {
      //   name: "components",
      //   description: "Explore our collection of fully designed components",
      //   href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      // },
      // {
      //   name: "plugins",
      //   description: "Check how you can integrate our plugins",
      //   href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      // },
    ],
  },
  // {
  //   name: "Our Team",
  //   icon: <Icon>view_day</Icon>,
  //   route: "/paparia-mentrtoles",
  //   component: <AboutUs />,
  //   collapse: [
  //     {
  //       name: "page sections",
  //       description: "See all sections",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "page headers",
  //           route: "/sections/page-sections/page-headers",
  //           component: <PageHeaders />,
  //         },
  //         {
  //           name: "features",
  //           route: "/sections/page-sections/features",
  //           component: <Features />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "nav tabs",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "pagination",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "input areas",
  //       description: "See all input areas",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "inputs",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "forms",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "attention catchers",
  //       description: "See all examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "alerts",
  //           route: "/sections/attention-catchers/alerts",
  //           component: <Alerts />,
  //         },
  //         {
  //           name: "modals",
  //           route: "/sections/attention-catchers/modals",
  //           component: <Modals />,
  //         },
  //         {
  //           name: "tooltips & popovers",
  //           route: "/sections/attention-catchers/tooltips-popovers",
  //           component: <TooltipsPopovers />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "elements",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "avatars",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "breadcrumbs",
  //           route: "/sections/elements/breadcrumbs",
  //           component: <BreadcrumbsEl />,
  //         },
  //         {
  //           name: "buttons",
  //           route: "/sections/elements/buttons",
  //           component: <Buttons />,
  //         },
  //         {
  //           name: "dropdowns",
  //           route: "/sections/elements/dropdowns",
  //           component: <Dropdowns />,
  //         },
  //         {
  //           name: "progress bars",
  //           route: "/sections/elements/progress-bars",
  //           component: <ProgressBars />,
  //         },
  //         {
  //           name: "toggles",
  //           route: "/sections/elements/toggles",
  //           component: <Toggles />,
  //         },
  //         {
  //           name: "typography",
  //           route: "/sections/elements/typography",
  //           component: <Typography />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   name: "Visit HIT",
  //   href: "https://www.imet.gr/index.php/en/",
  // },
  // {
  //   name: "Visit CERTH",
  //   href: "https://www.certh.gr/root.en.aspx",
  // },
];

export default routes;
