import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
// import FullLogoImg from "../assets/full_logo.png"
import AiSectionAid from "../assets/ai_section.png"

function AiSection({ backgroundColor, viewHeight }) {

	const SectionLeft =
		<div className='Section-Left-Contents'>
			<img
				src={AiSectionAid}
				alt="Feedback Tailored To You Using AI"
				className="Section-Image-Aid"
			/>
		</div>

	const SectionRight =
		<div className='Section-Right-Contents'>

			<div className='Section-Text-Container Ai-Text-Container'>
				<div className='Section-Heading'>
					<p className='No-Margin'>Feedback Tailored To You.</p>
				</div>
				<div className='Section-Description'>
					<p className='No-Margin'>
						Thrive helps you maintain a more manageable workload by analyzing your past productivity patterns and providing you feedback accordingly.
						<br/>
						<br/>
						Thrive’s AI features give you productivity tips and warns you when you assign yourself too many tasks!
					</p>
				</div>
			</div>



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

export default AiSection