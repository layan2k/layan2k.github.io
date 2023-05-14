// Projects Component
import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { ProjectData } from '../../data/projects'

// CSS styled-components + framer motion
const Container = styled(motion.div)`
  background-color: #1d1f22;
  padding: 60px 30px;
  position: relative;
  h1 {
    color: #1f51ff;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  @media only screen and (max-width: 1024px) {
    padding: 40px 10px;
  }
`

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    gap: 20px;
  }
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ProjectCard = styled.div`
  width: 30%;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #464646;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h3 {
    color: #1f51ff;
  }
  p {
    color: white;
  }
  a {
    text-decoration: none;
  }
  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
`

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #1f51ff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #1f51ff;
  }
`

const UpperTag = styled.div`
  display: flex;
  align-content: center;
  gap: 10px;
`

const LinkButton = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-content: center;
  justify-content: center;
  padding: 10px 10px;
  width: 80px;
  border: none;
  gap: 5px;
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 5px;
  background-color: #1f51ff;
`

const ProjectTags = styled.div`
  display: flex;
  gap: 5px;
  label {
    padding: 8px 10px;
    background-color: #1f51ff;
    color: white;
    border-radius: 1px;
    font-size: 10px;
  }
`

const Projects = () => {
  const projects = ProjectData
  const [displayCount, setDisplayCount] = useState(3)
  const smallScreen = typeof window !== 'undefined' && window.screen.width <= 780 ? true : false

  const handleLoadMore = () => {
    // Function that increases count
    setDisplayCount(displayCount + 3)
  }

  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.6,
          stiffness: 100,
        },
      })
    }
    if (!inView) {
      animation.start({
        x: smallScreen ? 0 : window.innerWidth,
        transition: {
          type: 'spring',
          duration: 2.6,
          stiffness: 100,
        },
      })
    }
  }, [animation, inView, smallScreen])

  const displayProjects = projects.slice(0, displayCount).map(project => {
    return (
      <ProjectCard key={project.title}>
        <ProjectImage
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.2, borderRadius: 0, height: 200, objectFit: 'cover' }}
        />
        <h3>{project.title}</h3>
        <p>{project.about}</p>
        <UpperTag>
          {project.demo && (
            <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
              <LinkButton className="link-button">
                <i className="fi fi-rr-globe"></i>Demo
              </LinkButton>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
              <LinkButton className="link-button">
                <i className="devicon-github-original colored"></i>Github
              </LinkButton>
            </a>
          )}
        </UpperTag>
        <ProjectTags className="project-tags">
          {project.tags.map(tag => {
            return (
              <label className="tag" key={tag}>
                {tag}
              </label>
            )
          })}
        </ProjectTags>
      </ProjectCard>
    )
  })
  return (
    <div ref={ref} id="projects">
      <Container animate={animation}>
        <h1>Projects</h1>
        <ProjectsContainer>{displayProjects}</ProjectsContainer>
        {displayCount < projects.length && (
          <ButtonContainer>
            <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>
          </ButtonContainer>
        )}
      </Container>
    </div>
  )
}

export default Projects
