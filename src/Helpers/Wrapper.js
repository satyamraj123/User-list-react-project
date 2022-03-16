//instead of using divs, use this to avoid creating unwanted divs in html tree
//this is used for wrapping jsx code instead of div,
// as we know we can return only one element in a react component

//for example(use wrapper instead of div here)-
// return <div>
//       {error && (
//         <ErrorModal
//           onClick={clearError}
//           title={error.title}
//           message={error.message}
//         ></ErrorModal>
//       )}
//       <Card className={styles.input}>
//       </Card>
//     </div>;

const Wrapper=(props)=>{
    return props.children;
}
export default Wrapper;