import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Card({title, icon, date, description, location, color}) {
  return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: `${color}`, color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
        date={date}
        iconStyle={{ background: '#fff' , color: '#000' }}
        icon={icon}
    >
        <h3 className=" font-bold text-xl">{title}</h3>
        <h4 className=" font-normal text-rose-600/70 -mt-1">{location}</h4>
        <h5 className="font-extralight ">
          {description}
        </h5>
    </VerticalTimelineElement>
  )
}

export default Card