const Education = () => {
  return (
    <section id="education" className="border-b-2 pb-20 md:pb-40">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
      <h3 className="text-xl md:text-2xl text-green-800 font-bold hover:underline hover:text-emerald-600">
        <a href="https://www.uit.edu.vn/" target="_blank" rel="noreferrer">University of Information Technology – UIT</a>
      </h3>
      <p className="text-base md:text-lg font-medium">I am currently a third-year student majoring in Information Technology at UIT – Vietnam National University, Ho Chi Minh City. My current GPA is <b>8.66</b></p>
      <div className="my-3 font-bold text-green-600">Oct 2022 - Now</div>
      <ul className="text-justify text-base md:text-lg space-y-2">
        <li>📖 My academic journey has built a strong foundation in Information Technology. I chose to begin my path with a focus on web development, where I continuously develop both technical and creative skills.</li>

        <li>📖 I've been fortunate to have supportive friends and passionate teachers who have guided me throughout my studies. I've also had opportunities to deliver presentations and share my ideas confidently in front of others.</li>

        <li>📖 My final year is about to begin, and I'm excited to see how much I will grow—both personally and professionally—over the next year.</li>
      </ul>
    </section>
  )
}

export default Education;