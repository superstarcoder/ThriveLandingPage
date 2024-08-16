import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
// import FullLogoImg from "../assets/full_logo.png"
import ThemeSectionAid from "../assets/theme_section.png"

function ThemeSection({ backgroundColor, viewHeight }) {

	const SectionLeft =
		<div className='Section-Left-Contents'>

			<div className='Section-Text-Container Theme-Text-Container'>
				<div className='Section-Heading'>
					<p className='No-Margin'>Choose Your Favorite Theme.</p>
				</div>
				<div className='Section-Description'>
					<p className='No-Margin'>
						Want to switch things up? Thrive lets you choose from various themes to customize your experience. More themes coming soon!</p>
				</div>
			</div>
		</div>

	const SectionRight =
		<div className='Section-Right-Contents'>
			<img
				src={ThemeSectionAid}
				alt="Customizability - you can choose from different themes!!"
				className="Section-Image-Aid"
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

export default ThemeSection