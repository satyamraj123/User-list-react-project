//instead of using divs, use this to avoid creating unwanted divs in html tree
//this is used for wrapping jsx code instead of div,
// as we know we can return only one element in a react component

//for example(use Wrapper instead of div here)-
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

//we can use React.Fragment instead of our own Wrapper, its same thing
//for example-
//<React.Fragment>
//    <h2>hello</h2><p>hello</p>
//</React.Fragment>
//OR another syntax for fragments
//<>
//<h2>hello</h2><p>hello</p>
//</>
