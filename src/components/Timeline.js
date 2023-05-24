import React from 'react'
import { useContext } from 'react';
import '../assets/Timeline.css'
import ThemeContext from '../context/ThemeContext';
const Timeline = () => {
	const theme = useContext(ThemeContext);

  return (
    <>
    <section class={`timeline-section-${theme.theme}`}>
	<div class="timeline-items">
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2023 May</div>
			<div class="timeline-content">
				<h3>Shopify</h3>
				<p>I started learning the shopify platform and template language liquid</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2023 Feb</div>
			<div class="timeline-content">
				<h3>Ant Design</h3>
				<p>I learned Ant Design which is popular design system for developing enterprise products.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2023 Jan</div>
			<div class="timeline-content">
				<h3>Node Js</h3>
				<p>I have acquired a solid foundation in Nodejs</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2022 Dec</div>
			<div class="timeline-content">
				<h3>React</h3>
				<p>I learned the react perfectly.</p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2021 Jan</div>
			<div class="timeline-content">
				<h3>React Basics</h3>
				<p>I learned React and its Main principles.</p>
			</div>
		</div>
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-date">2021 Feb</div>
				<div class="timeline-content">
					<h3>UI/UX</h3>
					<p>I learned UI/UX design at a basic level, because I think it is necessary for a web developer.</p>
				</div>
			</div>

			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-date">2021 Sep</div>
				<div class="timeline-content">
					<h3>Linux Basics</h3>
					<p>I learned basics of linux</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-date">2020 Sep</div>
				<div class="timeline-content">
					<h3>Python Web Scrapping</h3>
					<p>I learned beautifulsoup4</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-dot"></div>
				<div class="timeline-date">2019 Sep</div>
				<div class="timeline-content">
					<h3>Python Basics</h3>
					<p>I started learning python basics.</p>
				</div>
			</div>
		</div>
		
		
</section>
    </>
  )
}

export default Timeline