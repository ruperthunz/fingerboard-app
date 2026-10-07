import { useContext } from "react"
import { Context } from "../../App"

export function OpenStringsIndi(props) {
  const {
    t,
    strings,
    instrument,
    displayOpenStringsIndi,
    openStrings,
    setOpenStrings,
    language,
    openStringsToDisplay,
    setDisplayOpenStringsIndi
  } = useContext(Context)

  const stateClasses = ["", "selected", "ghost"]

  return (
    <div>
      <div className="label">{t.openStrings}</div>
      <div className="widget-content">
        <div className="btn-container">
          {strings[instrument].map((string, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={`btn ${stateClasses[displayOpenStringsIndi[index]]}`}
                onClick={() => handleClick(index)}
              >
                {t[string.scordatura]}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleClick(index) {
    let openStringToChange = openStrings[instrument][index]
    openStringToChange.state = (openStringToChange.state + 1) % 3
    let state = openStringToChange.state
    setDisplayOpenStringsIndi(currentState => {
      return currentState.toSpliced(index, 1, state)
    })
    setOpenStrings(currentOpenStringStates => {
      let instrumentToChange = currentOpenStringStates[instrument]
      instrumentToChange.toSpliced(index, 1, openStringToChange)
      currentOpenStringStates[instrument] = instrumentToChange
      return currentOpenStringStates
    })
  }

  //   function handleClick(index) {
  //   let state = (displayOpenStringsIndi[index] + 1) % 3
  //   setDisplayOpenStringsIndi(currentDisplayedOpenStrings => {
  //     return currentDisplayedOpenStrings.toSpliced(index, 1, state)
  //   })
  // }
}

// <div className="widget-content alt-3">
//   <div>
//     {" "}
//     {t[props.string] + (language === "English" ? " " : "-") + t.string}
//   </div>
//   <div className="label">{t.openString}</div>
//   <div
//     key={crypto.randomUUID()}
//     className={
//       displayOpenString ? "open-string-btn selected" : "open-string-btn"
//     }
//     onClick={() => setDisplayOpenString(!displayOpenString)}
//   >
//     {props.string}
//   </div>
// </div>

// import { useContext } from "react"
// import { Context } from "../../App"

// export function OpenStrings() {
//   const {
//     t,
//     strings,
//     instrument,
//     displayOpenStrings,
//     language,
//     setDisplayOpenStrings
//   } = useContext(Context)

//   return (
//     <div>
//       <div className="label">{t.openStrings}</div>
//       <div className="widget-content">
//         <div className="btn-container">
//           {strings[instrument].map((string, index) => {
//             return (
//               <div
//                 key={crypto.randomUUID()}
//                 className={
//                   displayOpenStrings[index] === true ? "btn selected" : "btn"
//                 }
//                 onClick={() => handleClick(index)}
//               >
//                 {t[string.scordatura]}
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )

//   function handleClick(index) {
//     let value
//     displayOpenStrings[index] === true ? (value = false) : (value = true)
//     setDisplayOpenStrings(currentDisplayedOpenStrings => {
//       return currentDisplayedOpenStrings.toSpliced(index, 1, value)
//     })
//   }
// }
