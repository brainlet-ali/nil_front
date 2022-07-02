export default function CodeBlock(props) {
  return (
    <div
      className={
        'relative mt-8 rounded-2xl bg-brand-code_light px-10 py-8 dark:bg-brand-code_dark'
      }
    >
      {props.children}
    </div>
  )
}
