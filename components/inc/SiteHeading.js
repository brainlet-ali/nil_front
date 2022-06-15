const SiteHeading = (props) => {
  return (
    <h1
      className={
        'text-center text-3xl font-bold  tracking-wider dark:text-slate-50'
      }
    >
      {props.children}
    </h1>
  )
}

export default SiteHeading
