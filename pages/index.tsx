import styled from 'styled-components';

const Page = styled.div`
  padding: 4rem;

  @media only screen and (max-width: 600px) {
    padding: 2rem;
  }
`;

const DescriptionBox = styled.div`
  margin-top: 2rem;
  padding: 1rem 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
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
  padding: 1rem;
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`;

const ProjectsContainer = styled.div`
  margin-top: 2rem;
`;

const ProjectHeader = styled.h2`
  font-weight: normal;
  color: #aaaaaa;
  text-align: center;
`;

const Project = styled.div`
  display: flex;
`;

const ProjectIconContainer = styled.div`
  padding: 0 1rem 0 0;
`;
type ProjectIconProps = { url: string };
const ProjectIcon = styled.div<ProjectIconProps>`
  width: 48px;
  height: 48px;
  background-image: url("${({ url }) => url}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;
const ProjectDetails = styled.div``;
const ProjectName = styled.a`
  color: #E63946;
  font-size: 1.5rem;
`;
const ProjectDescription = styled.p``;

type ProjectProps = {
  projectName: string,
  projectURL: string,
  description: string,
  imageUrl: string
};

function ProjectDisplay({
  projectName,
  projectURL,
  description,
  imageUrl
}: ProjectProps) {
  return <Project>
    <ProjectIconContainer>
      <ProjectIcon url={imageUrl} />
    </ProjectIconContainer>
    <ProjectDetails>
      <ProjectName href={projectURL} target='_blank'>{projectName}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
    </ProjectDetails>
  </Project>
}

export default function Home() {
  return (
    <Page>
      <Header>
        <BrandIcon />
        <BrandName>Richmond Croft</BrandName>
      </Header>

      <ContentsContainer>
        <DescriptionBox>
          Richmond Croft is an open source initiative to create and collaborate on creative projects.
          I started it to support and help my mentees to gain real life development experience with the
          open source projects. The idea has extended to build an open source community.
        </DescriptionBox>

        <ProjectsContainer>
          <ProjectHeader>Our Projects</ProjectHeader>
          <ProjectDisplay
            projectName='Dyslens'
            projectURL='https://github.com/RichmondCroft/dyslens'
            description='Dyslens is a open source chrome extension, built and designed to make web more accessible for people who have different reading needs and suffering with dyslexia.'
            imageUrl='/img/dyslens-icon.png'
          />
        </ProjectsContainer>
      </ContentsContainer>
    </Page>
  )
}
