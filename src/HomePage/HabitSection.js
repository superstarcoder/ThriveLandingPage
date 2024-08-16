import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
// import FullLogoImg from "../assets/full_logo.png"
import HabitSectionAid from "../assets/habit_section.png"

function HabitSection({ backgroundColor, viewHeight }) {

	const SectionLeft =
		<div className='Section-Left-Contents'>
			<img
				src={HabitSectionAid}
				alt="Images of Habits that let you build streaks!"
				className="Section-Image-Aid"
			/>
		</div>

	const SectionRight =
		<div className='Section-Right-Contents'>
			<div className='Section-Text-Container Habit-Text-Container'>
				<div className='Section-Heading'>
					<p className='No-Margin'>Build Healthy Habits.</p>
				</div>
				<div className='Section-Description'>
					<p className='No-Margin'>
In the midst of your busy life, you may find it hard to find time for things that are important to you: like exercising everyday in the gym or working on a project you are passionate about.
<br />
<br />
Thrive allows you to integrate these habits into your routine so you don’t forget about them.
<br />
<br />
You build streaks as you complete them each day!</p>
				</div>
			</div>
		</div>

	return (
		<div className='Habit-Section'>
			<PageSection
				backgroundColor={backgroundColor}
				viewHeight={viewHeight}
				SectionLeft={SectionLeft}
				SectionRight={SectionRight}
			/>
		</div>
	)
}

export default HabitSection