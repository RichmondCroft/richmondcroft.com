import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const DYSLENS_LINK = 'https://chrome.google.com/webstore/detail/dyslens/mpbkfbafkpkbpmgdcgkmonpfnodgfepo';

const Page = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const BrandIcon = styled.div`
  height: 64px;
  width: 64px;
  background-image: url('./img/logo.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const BrandName = styled.h2`
  margin-left: 12px;
`;

const ContentsContainer = styled.div`
  margin: 3rem 0;
  padding: 0 4rem;
  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const ProjectsContainer = styled.div`
  margin-top: 2rem;
`;

const ProjectHeader = styled.h2`
  margin-bottom: 1rem;
  font-weight: normal;
  color: #aaaaaa;
  text-align: center;
`;

const Project = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const ProjectIconContainer = styled.div`
  padding: 0 2rem 0 0;
  flex: 4;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;
const ProjectIcon = styled.img`
  width: 100%;
`;
const ProjectDetails = styled.div`
  flex: 8;
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
  }
`;
const ProjectName = styled.a`
  color: #E63946;
  font-size: 2rem;
`;

const Link = styled.a`
  color: #E63946;
`;

const ProjectDescription = styled.p``;

function DyslensProject() {
  return <Project>
    <ProjectIconContainer>
      <ProjectIcon src='/img/dyslens-promo.png' />
    </ProjectIconContainer>
    <ProjectDetails>
      <ProjectName href={DYSLENS_LINK} target='_blank'>Dyslens</ProjectName>
      <ProjectDescription>Dyslens is a open source chrome extension, built and designed to make web more accessible for people who have different reading needs and suffering with dyslexia.</ProjectDescription>
      <ProjectDescription>With Dyslens users can:</ProjectDescription>
      <ul>
        <StyledLi>Change the text font and color</StyledLi>
        <StyledLi>Display an opaque overlay to make text more readable</StyledLi>
        <StyledLi>Put a focus line to just focus on few lines of text</StyledLi>
      </ul>

      <p>
        <Link href='https://github.com/RichmondCroft/dyslens' target='_blank'>Fork us on Github</Link>
      </p>
      <p>
        <Link href='DYSLENS_LINK' target='_blank'>Install on Chrome</Link>
      </p>
    </ProjectDetails>
  </Project>
}

const StyledSlideContainer = styled.div<{ bgColor: string }>`
  height: 300px;
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
`;
const SlideText = styled.h2`
  color: white;
  margin: 1rem;
`;
function Slide1() {
  return (<Paper>
    <StyledSlideContainer bgColor='#111'>
      <SlideText>
        Richmond Croft is an open source community to create and collaborate on creative projects.
      </SlideText>
    </StyledSlideContainer>
  </Paper>);
}

const DyslensSlideContainer = styled.div`text-align: center;`;
const DyslensImageContainer = styled.div`padding-bottom: 1rem;`;
const DyslensTitle = styled.h2`
  color: white;
  text-align: center;
  margin: 0;
`;
function Slide2() {
  return (<Paper>
    <StyledSlideContainer bgColor='#333'>
      <DyslensSlideContainer>

        <DyslensImageContainer>
          <img src='./img/dyslens-icon.png' />
        </DyslensImageContainer>

        <DyslensTitle>
          We have officially launched <Link href={DYSLENS_LINK} target='_blank'>Dyslens</Link>!
        </DyslensTitle>
        <SlideText>
          Dyslens helps people with dyslexia to customize websites according to their needs.
        </SlideText>

      </DyslensSlideContainer>
    </StyledSlideContainer>
  </Paper >);
}


const StyledLi = styled.li`
  font-size: 1rem;
`;

function SlideShow() {
  return (
    <Carousel>
      <Slide1 />
      <Slide2 />
    </Carousel>
  )
}


export default function Home() {
  return (
    <Page>
      <Header>
        <BrandIcon />
        <BrandName>Richmond Croft</BrandName>
      </Header>

      <SlideShow />

      <ContentsContainer>
        <ProjectHeader>Our Projects</ProjectHeader>
        <ProjectsContainer>
          <DyslensProject />
        </ProjectsContainer>
      </ContentsContainer>

    </Page>
  )
}
