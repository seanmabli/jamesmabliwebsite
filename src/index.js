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
            <NavButton variant="text" href="#profiles">
              Profiles
            </NavButton>
          </li>
          <li className="item">
            <NavButton variant="text" href="#contact">
              Contact
            </NavButton>
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
      <p>
        "Food Insecurity and the Need for Prepared Meals Among Older Adults in
        Cook County", November 2019{" "}
        <a
          className="bold"
          href="https://www.chicagosfoodbank.org/wp-content/uploads/2019/11/RRF_PreparedMeals_Report.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Older Americans Act Title III-C Nutrition Services Program: An
        Examination of Social Activities at Congregate Meal Sites and Their Role
        in Improving Socialization Outcomes of Participants", January 2019{" "}
        <a
          className="bold"
          href="https://acl.gov/sites/default/files/programs/2018-12/AoAevaluation_socialization.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Needs of and Service Use Among Participants in the Older Americans Act
        Title III-C Nutrition Services Program", November 2018{" "}
        <a
          className="bold"
          href="https://acl.gov/sites/default/files/programs/2018-11/AoAParticipantNeedProgramUse.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Evaluation of the Effect of the Older Americans Act Title III-C
        Nutrition Services Program on Participants' Healthcare Utilization",
        September 2018{" "}
        <a
          className="bold"
          href="https://acl.gov/sites/default/files/programs/2018-10/NSPevaluation_healthcareutilization.pdf"
        >
          [pdf]
        </a>{" "}
        <a
          className="bold"
          href="https://www.youtube.com/watch?v=izn9NBwKs84&feature=youtu.be"
        >
          [webinar]
        </a>
      </p>
      <br />
      <p>
        "Household Search or Individual Search: Does it Matter? Evidence from
        Lifetime Inequality Estimates" (with Luca Flabbi) (
        <span className="italic">Journal of Labor Economics</span>, January
        2018){" "}
        <a
          className="bold"
          href="https://www.journals.uchicago.edu/doi/abs/10.1086/693864"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "The Impact of Healthy Harlem on Body Mass Index and Weight Status of
        Adolescents after Two and Three Years"{" "}
        <a
          className="bold"
          href="https://mathematica.org/publications/the-impact-of-healthy-harlem-on-the-body-mass-index-and-weight-status-of-adolescents-after-two"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "The Impact of Healthy Harlem on Student Fitness Outcomes after Two and
        Three Years"{" "}
        <a
          className="bold"
          href="https://mathematica.org/publications/the-impact-of-healthy-harlem-on-student-fitness-outcomes-after-two-and-three-years"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Examination of the Effect of SNAP Benefit and Eligibility Parameters on
        Low Income Households" October 2017{" "}
        <a
          className="bold"
          href="https://www.mathematica.org/publications/examination-of-the-effect-of-snap-benefit-and-eligibility-parameters-on-low-income-households"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "The Impact of Healthy Harlem on the Prevalence of Child Overweight and
        Obesity and Contributing Factors: Interim Evaluation Report" September
        2017{" "}
        <a
          className="bold"
          href="https://www.mathematica.org/publications/the-impact-of-healthy-harlem-on-the-prevalence-of-child-overweight-and-obesity-and-contributing"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Emergency Food Pantry Use among SNAP Households with Children" (with
        Julie Worthington) September 2017{" "}
        <a
          className="bold"
          href="https://www.mathematica.org/publications/emergency-food-pantry-use-among-snap-households-with-children"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SNAP Participation and Emergency Food Pantry Usage" (with Julie
        Worthington) ({" "}
        <span className="italic">
          Journal of Nutrition Education and Behavior
        </span>
        , September 2017){" "}
        <a
          className="bold"
          href="https://www.sciencedirect.com/science/article/pii/S1499404616309551"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Massachusetts Homeless Triage Assessment". August 2017{" "}
        <a
          className="bold"
          href="https://www.mathematica.org/publications/massachusetts-homeless-triage-assessment"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SNAP Participants' Employment Characteristics and Barriers to Work".
        July 2017{" "}
        <a
          className="bold"
          href="https://www.mathematica.org/publications/supplemental-nutrition-assistance-program-participants-employment-characteristics-and-barriers"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Evaluation of the Effect of the Older Americans Act Title III-C
        Nutrition Services Program on Participants’ Food Security,
        Socialization, and Diet Quality". July 2017{" "}
        <a
          className="bold"
          href="https://acl.gov/sites/default/files/programs/2017-07/AoA_outcomesevaluation_final.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Supplemental Nutrition Assistance Program Participation and Local
        Outreach and Eligibility Services" (
        <span className="italic">
          Agricultural and Resource Economics Review
        </span>
        , December 2015){" "}
        <a
          className="bold"
          href="https://ageconsearch.umn.edu/record/225653?ln=en"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Household Lifetime Inequality Estimates in the U.S. Labor Market" (with
        Luca Flabbi and Mario Salazar) (
        <span className="italic">Research in Labor Economics</span>, September
        2015){" "}
        <a
          className="bold"
          href="https://conference.iza.org/conference_files/inequality_2015/flabbi_l2434.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Process Evaluation of Older Americans Act Title III-C Nutrition
        Services Program". September 2015.
        <a
          className="bold"
          href="https://acl.gov/sites/default/files/programs/2017-02/NSP-Process-Evaluation-Report.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Examination of Cash Nutrition Assistance Program Benefits in Puerto
        Rico" August 2015.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/PuertoRico-Cash.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Association of Participation in the Supplemental Nutrition Assistance
        Program and Psychological Distress" (with Vanessa Oddo),{" "}
        <span className="italic">American Journal of Public Health</span>, June
        2015{" "}
        <a
          className="bold"
          href="https://ajph.aphapublications.org/doi/pdf/10.2105/AJPH.2014.302480"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Diet Quality of Americans by SNAP Participation Status: Data from the
        National Health and Nutrition Examination Survey, 2007-2010"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/NHANES-SNAP07-10.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Diet Quality of Young American Children by WIC Participation Status:
        Data from the National Health and Nutrition Examination Survey,
        2005-2008"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/NHANES-WIC05-08.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Diet Quality of American School Children by National School Lunch
        Program Participation Status: Data from the National Health and
        Nutrition Examination Survey, 2005-2010"
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/NHANES-NSLP05-10.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "The Food Access Environment and Food Purchase Behavior of SNAP
        Households" (with Julie Worthington){" "}
        <span className="italic">
          Journal of Hunger & Environmental Nutrition
        </span>
        . March 25, 2015{" "}
        <a
          className="bold"
          href="https://www.tandfonline.com/doi/full/10.1080/19320248.2015.1004221#abstract"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Testimony for U.S. House of Representatives Hearing on the Supplemental
        Nutrition Assistance Program." February 2015.{" "}
        <a
          className="bold"
          href="http://www.mathematica-mpr.com/~/media/publications/pdfs/nutrition/snap_dynamics_2008-2012_testimony.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Supplemental Nutrition Assistance Program Participation is Associated
        with an Increase in Household Food Security in a National Evaluation"
        (with Jim Ohls) <span className="italic">Journal of Nutrition</span>.
        February 1, 2015.{" "}
        <a
          className="bold"
          href="https://academic.oup.com/jn/article/145/2/344/4585732a"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "WIC Breastfeeding Policy Inventory." January 2015.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/WICBPI.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Dynamics of Supplemental Nutrition Assistance Program Participation
        from 2008 to 2012." December 2014.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/Dynamics2008-2012.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Determinants of Supplemental Nutrition Assistance Program Participation
        from 2008 to 2012." December 2014.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/ops/Determinants2008-2012.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SNAP Participation, Food Security, and Geographic Access to Food" March
        2014.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/SNAPFS_FoodAccess.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SNAP Participation and Urban and Rural Food Security." March 2014.{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/SNAPFS_UrbanRural.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Supplemental Nutrition Assistance Program Participation and Child Food
        Security" (with Julie Worthington) Pediatrics. 2014, 113(4): 1-10.{" "}
        <a
          className="bold"
          href="https://publications.aap.org/pediatrics/article-abstract/133/4/610/32698/Supplemental-Nutrition-Assistance-Program?redirectedFrom=fulltext"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Recent Trends in Spending Patterns of Supplemental Nutrition Assistance
        Program Participants and Other Low-Income Americans" (with Rosalie
        Malsberger) <span className="italic">Monthly Labor Review</span>.
        September 2013{" "}
        <a
          className="bold"
          href="https://www.bls.gov/opub/mlr/2013/article/mabli-malsberger.htm" // doesn't work, fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Characterizing Food Access in America: Considering the Role of
        Emergency Food Pantries in Areas without Supermarkets" (with David Jones
        and Phillip Kaufman){" "}
        <span className="italic">
          Journal of Hunger & Environmental Nutrition
        </span>
        . Vol 8, Issue 3, 2013{" "}
        <a
          className="bold"
          href="https://www.tandfonline.com/eprint/CNhvfsKfFhQrcbC7vZzt/full"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Measuring the Effect of Supplemental Nutrition Assistance Program
        (SNAP) Participation on Food Security"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/Measuring2013.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SNAP Food Security In-Depth Interview Study Final Report"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/SNAPFoodSec.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Food Security and Food Access among Emergency Food Pantry Households"{" "}
        <a
          className="bold"
          href="https://naldc.nal.usda.gov/download/50614/PDF"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Economic and Geographic Access to Food Retailers and Emergency Food
        Pantries"{" "}
        <a
          className="bold"
          href="https://naldc.nal.usda.gov/download/50615/PDF"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        “Supplemental Nutrition Assistance Program Dynamics and Employment
        Changes: The Role of Employment Instability” (with Jim Ohls){" "}
        <span className="italic">
          Applied Economic Perspectives and Policy. 2012; doi:
          10.1093/aepp/ppr045
        </span>{" "}
        <a
          className="bold"
          href="https://onlinelibrary.wiley.com/journal/20405804"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Dynamics of Supplemental Nutrition Assistance Program Participation in
        the Mid-2000s"
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/DynamicsMid2000.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Determinants of Supplemental Nutrition Assistance Program Entry and
        Exit in the Mid-2000s"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/DeterminantsMid2000.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Supplemental Nutrition Assistance Program Caseload Trends and Changes
        in Measures of Unemployment, Labor Underutilization, and Program Policy
        from 2000 to 2008"{" "}
        <a
          className="bold"
          href="" // doesn't work, fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Food Expenditures and Diet Quality Among Low-Income Households and
        Individuals"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/FoodExpendDietQuality.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Low Income Household Spending Patterns and Measures of Poverty"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/SpendingPatterns.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Hunger in America 2010"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Analysis of Transition Events in Health Insurance Coverage"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Effects of Economic Conditions and Program Policy on State Food Stamp
        Program Caseloads: 2000-2006"{" "}
        <a
          className="bold"
          href="https://naldc.nal.usda.gov/download/35893/PDF"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "WIC Eligibles and Coverage: 1994-2007"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Dynamics of WIC Program Participation by Infants and Children:
        2001-2003"{" "}
        <a
          className="bold"
          href="https://fns-prod.azureedge.us/sites/default/files/WICDynamics2001-2003.pdf"
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "SCHIP Children: How Long Do They Stay and Where Do They Go?"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Sample Loss and Survey Bias in Estimates of Social Security
        Beneficiaries: A Tale of Two Surveys"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
        >
          [pdf]
        </a>
      </p>
      <br />
      <p>
        "Dynamics of Food Stamp Program Participation: 2001-2003"{" "}
        <a
          className="bold"
          href="" // doesn't work fix
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
      </div>
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
  </React.StrictMode>
);
