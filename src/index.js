import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./index.css";

const NavButton = styled(Button)({
  color: "#000000",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  lineHeight: 1.5,
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});

const ProfileButton = styled(Button)({
  color: "#000000",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  lineHeight: 1.5,
  backgroundColor: "#f0f0f0",
  margin: "10px",
  "&:hover": {
    backgroundColor: "#e1e1e1",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="site">
      <div className="navbar">
        <h1>James Mabli</h1>
        <ul className="navbarcontent">
          <li className="item">
            <NavButton variant="text" href="#research">
              Research
            </NavButton>
          </li>
          <li className="item">
            <NavButton variant="text">Profiles</NavButton>
          </li>
          <li className="item">
            <NavButton variant="text">Contact</NavButton>
          </li>
        </ul>
      </div>
      <br />
      <p>
        I am the executive director of the children, youth, and families
        division within the human services unit at{" "}
        <a href="https://mathematica.org/">Mathematica</a> specializing in food
        and nutrition policy and employment and training programs. My research
        focuses on federal nutrition assistance programs, including the
        Supplemental Nutrition Assistance Program (SNAP) and the Older Americans
        Act Title III-C Nutrition Services Program, as well as community-based
        emergency food programs. Much of my work focuses on low-income
        households' decisions to participate in these programs, to find and
        retain employment, and to address barriers to ensuring job security and
        adequate access to food.
      </p>
      <br />
      <p>
        I currently oversee two employment and training (E&T) evaluations funded
        by the Food and Nutrition Service: a rapid cycle evaluation of
        operational improvements in SNAP E&T which is testing up to eight
        small-scale interventions in operations or service delivery and a large
        ten-state random assignment evaluation of innovative strategies to help
        SNAP participants increase employment, earnings, and food security and
        decrease use of public assistance. I am also leading a process
        evaluation of the Aging Network for the U.S. Department of Health and
        Human Services that examines network agencies' return on investment of
        the services they provide to older adults related to congregate and
        home-delivered meals, transportation, socialization, and community
        health and family caregiving. My recent work also includes evaluations
        of interventions for childhood obesity and studies of geographic access
        to food for low-income families.
      </p>
      <br />
      <h2 id="research">Research</h2>
      <br />
      <p>
        "Food Insecurity is Directly Associated with the Use of Health Services
        for Adverse Health Events Among Older Adults" (with Ariella Kahn-Lang
        Spitzer and Marisa Shenk) (
        <span className="italic">Journal of Nutrition</span>, December 2020){" "}
        <span className="bold">
          <a href="https://academic.oup.com/jn/article/150/12/3152/5936147?login=true">
            [pdf]
          </a>
        </span>
      </p>
      <br />
      <p>
        "Randomized Controlled Trial of Healthy Harlem's Get Fit Program: An
        After-School Intervention for Childhood Overweight and Obesity in the
        Harlem Children's Zone" (with Martha Bleeker, Mary Kay Fox, Betina
        Jean-Louis, and Marlene Fox) (
        <span className="italic">Childhood Obesity</span>, October 2020){" "}
        <a
          className="bold"
          href="https://www.unboundmedicine.com/medline/citation/33030989/Randomized_Controlled_Trial_of_Healthy_Harlem%27s_Get_Fit_Program:_An_After-School_Intervention_for_Childhood_Overweight_and_Obesity_in_the_Harlem_Children%27s_Zone."
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Continued Participation in Congregate Meal Programs: The Role of
        Geographic Access to Food" (with Marisa Shenk) (
        <span className="italic">
          Journal of Nutrition in Gerontology and Geriatrics
        </span>
        , October 2020){" "}
        <a
          className="bold"
          href="https://www.tandfonline.com/doi/abs/10.1080/21551197.2020.1838397"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Determinants of Food Insecurity Among Congregate Meal Participants: A
        Cross-Sectional Study Using Participant Information Matched to
        Geographic and Service Provider Data" (with Marisa Shenk) (
        <span className="italic">Journal of Aging: Research and Lifestyle</span>
        , September 2020){" "}
        <a
          className="bold"
          href="https://www.jarlife.net/4276-determinants-of-food-insecurity-among-congregate-meal-participants-a-cross-sectional-study-using-participant-information-matched-to-geographic-and-service-provider-data.html"
        >
          [pdf]
        </a>
      </p>
      <br />
      <h2 id="profiles">Profiles</h2>
      <br />
      <div>
        <ProfileButton
          variant="text"
          href="https://scholar.google.com/citations?user=xL6GpewAAAAJ&hl=en"
          style={{ marginLeft: "0px" }}
        >
          Google Scholar Citations Profile
        </ProfileButton>
        <ProfileButton
          variant="text"
          href="https://ideas.repec.org/f/pma455.html"
        >
          Ideas Profile
        </ProfileButton>
        <ProfileButton
          variant="text"
          href="https://econpapers.repec.org/RAS/pma455.htm"
        >
          RePEc Profile
        </ProfileButton>
        <ProfileButton
          variant="text"
          href="https://mathematica.org/staff/james-mabli"
        >
          Mathematica Profile
        </ProfileButton>

        <br />
        <h2 id="contact">Contact</h2>
        <br />
        <p>James Mabli</p>
        <p>Mathematica</p>
        <p>
          <a className="link" href="https://goo.gl/maps/PBHdb9z5eLhww1QGA">
            955 Massachusetts Avenue
          </a>
          , Suite 801{" "}
        </p>
        <p>Cambridge, MA 02139</p>
        <br />
        <a className="link" href="mailto:jmabli@mathematica-mpr.com">
          jmabli@mathematica-mpr.com
        </a>
      </div>
    </div>
  </React.StrictMode>
);
