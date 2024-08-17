import React from 'react'
import PageSection from '../components/PageSection'
import "./Home.css"
import IntroSection from './IntroSection'
import HabitSection from './HabitSection'
import ThemeSection from './ThemeSection'
import AiSection from './AiSection'
import MissionSection from './MissionSection'

function Home() {
	return (
		<div className='Home'>
			<IntroSection backgroundColor={"#151934"} viewHeight={"50em"}/>
			<HabitSection backgroundColor={"#252B55"} viewHeight={"30em"}/>
			<ThemeSection backgroundColor={"#151934"} viewHeight={"30em"} />
			<AiSection backgroundColor={"#252B55"} viewHeight={"30em"} />
			<MissionSection backgroundColor={"#151934"} viewHeight={"30em"}/>
		</div>
	)
}

export default Home