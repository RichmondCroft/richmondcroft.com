import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image';
import { Paper } from '@mui/material'
import { useEffect, useState } from 'react';

const DYSLENS_LINK = 'https://chrome.google.com/webstore/detail/dyslens/mpbkfbafkpkbpmgdcgkmonpfnodgfepo';

const Page = styled.div``;

const ProjectDescription = styled.p``;

function DyslensProject() {
  const [displayImage, setDisplayImage] = useState(false);
  useEffect(() => {
    setTimeout(() => setDisplayImage(true), 100)
  }, []);

  return <div className='home-project'>
    <div className='home-project-icon-container'>
      {displayImage && <Image alt='Dyslens' className='home-project-icon' src='/img/dyslens-promo.png' />}
    </div>
    <div className='home-project-details'>
      <a className='home-project-name' href={DYSLENS_LINK} target='_blank' rel="noreferrer">Dyslens</a>
      <ProjectDescription>Dyslens is a open source chrome extension, built and designed to make web more accessible for people who have different reading needs and suffering with dyslexia.</ProjectDescription>
      <ProjectDescription>With Dyslens users can:</ProjectDescription>
      <ul>
        <StyledLi>Change the text font and color</StyledLi>
        <StyledLi>Display an opaque overlay to make text more readable</StyledLi>
        <StyledLi>Put a focus line to just focus on few lines of text</StyledLi>
      </ul>

      <p>
        <a className='home-link' href='https://github.com/RichmondCroft/dyslens' target='_blank' rel="noreferrer">Fork us on Github</a>
      </p>
      <p>
        <a className='home-link' href='DYSLENS_LINK' target='_blank' rel="noreferrer">Install on Chrome</a>
      </p>
    </div>
  </div>
}

// const StyledSlideContainer = styled.div<{ bgColor: string }>`
//   height: 350px;
//   background: ${({ bgColor }) => bgColor};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   color: white;
// `;
const SlideText = styled.h2`
  color: white;
  margin: 1rem;
`;
function Slide1() {
  return (<Paper>
    <div className='home-styled-slide-container home-styled-slide-container__dark'>
      <SlideText>
        Richmond Croft is an open source community to create and collaborate on creative projects.
      </SlideText>
    </div>
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
    <div className='home-styled-slide-container home-styled-slide-container__light'>
      <DyslensSlideContainer>

        <DyslensImageContainer>
          <Image width={80} height={80} alt='Dyslens' src='/img/dyslens-icon.png' />
        </DyslensImageContainer>

        <DyslensTitle>
          We have officially launched <a className='home-link' href={DYSLENS_LINK} target='_blank' rel="noreferrer">Dyslens</a>!
        </DyslensTitle>
        <SlideText>
          Dyslens helps people with dyslexia to customize websites according to their needs.
        </SlideText>

      </DyslensSlideContainer>
    </div>
  </Paper >);
}


const StyledLi = styled.li`
  font-size: 1rem;
`;

function SlideShow() {
  return (
    <div className='home-slide-container-outer'>
      <Carousel>
        <Slide1 />
        <Slide2 />
      </Carousel>
    </div>
  )
}


export default function Home() {
  return (
    <Page>
      <div className='home-header'>
        <div className='home-brand-icon' />
        <h2 className='home-brand-name'>Richmond Croft</h2>
      </div>

      <SlideShow />

      <div className='home-contents-container'>
        <h2 className='home-project-header'>Our Projects</h2>
        <div className='home-projects-container'>
          <DyslensProject />
        </div>
      </div>

    </Page>
  )
}
