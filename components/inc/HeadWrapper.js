const HeadWrapper = props => {
  return (
     <div className={'flex justify-center space-y-4 flex-col text-center '}>
       {props.children}
     </div>
   );
}

export default HeadWrapper;
