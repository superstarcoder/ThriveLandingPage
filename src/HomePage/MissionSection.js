import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
// import FullLogoImg from "../assets/full_logo.png"
import MissionSectionAid from "../assets/ThriveAppIcon.png"
import { DISCORD_URL, INSTALL_URL } from '../AppConstants'

function MissionSection({ backgroundColor, viewHeight }) {

	const onInstallClick = () => {
		window.open(INSTALL_URL, "blank_", "noreferrer")
	}
	const onDiscordClick = () => {
		window.open(DISCORD_URL, "blank_", "noreferrer")
	}

	const SectionLeft =
		<div className='Section-Left-Contents'>

			<div className='Section-Text-Container Mission-Text-Container'>
				<div className='Section-Heading'>
					<p className='No-Margin'>Thrive’s Mission</p>
				</div>
				<div className='Section-Description'>
					<p className='No-Margin'>
						The ultimate goal of Thrive is to help people lead more balanced, fulfilling, and happy lives, while bringing these people together to form a friendly & supportive community.
						<br />
						<br />
						The app is currently in its very early stages and is strongly open to feedback from Thrive’s community and users.
					</p>
				</div>
			</div>

			<div className='Action-Buttons Mission-Action-Buttons'>
				<button className='Install-Button Mission-Install-Button' onClick={onInstallClick}>Get Access to Beta</button>
				<button className='Discord-Button Mission-Discord-Button' onClick={onDiscordClick}>Join Discord Community</button>
			</div>
		</div>

	const SectionRight =
		<div className='Section-Right-Contents'>
			<img
				src={MissionSectionAid}
				alt="Thrive Productivity App Logo"
				className="Section-Image-Aid Mission-Image-Aid"
			/>

		</div>

	return (
		<div className='Section-Container'>
			<PageSection
				backgroundColor={backgroundColor}
				viewHeight={viewHeight}
				SectionLeft={SectionLeft}
				SectionRight={SectionRight}
			/>
		</div>
	)
}

export default MissionSection