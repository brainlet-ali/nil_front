export const PageContainer = (props) => {
  return (
    <div className="container mx-auto max-w-7xl py-10 sm:px-6 lg:px-8">
      {props.children}
    </div>
  )
}
