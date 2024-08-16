import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
import FullLogoImg from "../assets/full_logo.png"
import IntroSectionAid from "../assets/intro_section.png"

function IntroSection({ backgroundColor, viewHeight }) {

	const onInstallClick = () => {

	}
	const onDiscordClick = () => {

	}

	const SectionLeft =
		<div className='Intro-Section-Left'>
			<img
				src={FullLogoImg}
				alt="Thrive Full Logo"
				className="Thrive-Full-Logo"
			/>
			<div className='Tag-Line'>
				<p className='No-Margin'>Tailored Productivity for Your Unique Workflow.</p>
			</div>
			<div className='Thrive-Description'>
				<p className='No-Margin'>Thrive is a simple and customizable productivity app that allows you to build positive habits, track your progress through stunning visual charts, and elevate your productivity through AI-powered support.</p>
			</div>
			<div className='Action-Buttons'>
				<button className='Install-Button' onClick={onInstallClick}>Get Access to Beta</button>
				<button className='Discord-Button' onClick={onDiscordClick}>Join Discord Community</button>
			</div>

		</div>

	const SectionRight =
		<div className='Intro-Section-Right'>
			<img
				src={IntroSectionAid}
				alt="Thrive Full Logo"
				className="Intro-Section-Aid"
			/>
		</div>

	return (
		<div className='Intro-Section'>
			<PageSection
				backgroundColor={backgroundColor}
				viewHeight={viewHeight}
				SectionLeft={SectionLeft}
				SectionRight={SectionRight}
			/>
		</div>
	)
}

export default IntroSection