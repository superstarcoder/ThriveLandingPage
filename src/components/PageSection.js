import React from 'react'
import "./PageSection.css"

function PageSection({ backgroundColor, viewHeight, SectionLeft, SectionRight }) {

	return (
		<div className='Page-Section' style={{ backgroundColor: backgroundColor, minHeight: viewHeight }}>
			<div className="Section-Left">
				{SectionLeft}
			</div>
			<div className="Section-Right">
				{SectionRight}
			</div>
		</div>
	)
}

export default PageSection