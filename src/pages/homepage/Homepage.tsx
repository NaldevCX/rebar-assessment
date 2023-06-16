//IMPORTS START
import './index.css'
import headerImage from '../../assets/background.jpg'
import consultingIcon from '../../assets/consulting.svg';
import designIcon from '../../assets/design.svg';
import developmentIcon from '../../assets/development.svg';
import analysisIcon from '../../assets/analysis.svg';
import BottomBlock from '../../components/bottom-section/BottomBlock';
import macBook from '../../assets/macbook.png';
import ServiceGroup from '../../components/card-group/ServiceGroup';
import NavbarComponent from '../../components/navbar/Navbar';
//IMPORTS END

function HomePage() {
  //VALUES
  //HEADER VALUES
  const loremIpsumText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const headerBlockContent: string[] =
    ["Creative Solutions",
      loremIpsumText]

  //SERVICES VALUES
  const servicesTitles: string[] =
    ["Consulting",
      "Developing",
      "Designing",
      "Analysis"]
  const servicesDescription: string[] =
    [loremIpsumText]
  //BOTTOM VALUES
  const bottomValues: string[] =[
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'LOREM IPSUM',
    loremIpsumText,
  ]



  return (
    <>
    <NavbarComponent/>
      {/* HEADER BLOCK */}
      <div className="header-block">
        <div className='header-container'>
          <img className='header-img' src={headerImage} alt="Header Content Image" />
          <div className='header-block-title font-bold text-white text-5xl absolute -top-2 left-1/2 -translate-x-1/2 translate-y-60'>
            {headerBlockContent[0]}
          </div>
          <p className='text-none sd:w-1 md:w-1/4 header-block-description absolute text-white text-1.3xl bottom-2 top-10 left-1/2 -translate-x-1/2 translate-y-80'>
            {headerBlockContent[1]}
          </p>
        </div>
      </div>
      {/* SERVICES BLOCK */}
      <ServiceGroup consultingIcon={consultingIcon} developmentIcon={developmentIcon} analysisIcon={analysisIcon} designIcon={designIcon} serviceTitle={servicesTitles} serviceDesc={servicesDescription}/>
      {/* BOTTOM BLOCK */}
      <BottomBlock subheader={bottomValues[0]} header={bottomValues[1]} description={bottomValues[2]} imgSrc={macBook}/>
    </>
  )
}

export default HomePage