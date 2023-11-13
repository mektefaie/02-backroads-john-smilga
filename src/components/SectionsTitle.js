const SectionsTitle = ({ title, coloredTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{coloredTitle}</span>
      </h2>
    </div>
  )
}
export default SectionsTitle
