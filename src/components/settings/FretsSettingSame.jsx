import { useContext } from "react"
import { Context } from "../../App"

// export function FretsSettingSame() {
//   const { t, language, frets, setFrets, fretsIndi, setFretsIndi } =
//     useContext(Context)

//   return (
//     <div className="">
//       <div className="widget-content">
//         <div className="btn-container">
//           {fretsIndi.map((octave, index) => {
//             return (
//               <div key={octave.English} className="fret-choice-wrapper">
//                 <div className="fret-choice-container">
//                   <div
//                     className={octave.allSelected ? "btn selected" : "btn"}
//                     onClick={() => handleSelectAll(octave)}
//                   >
//                     {octave[language]}
//                   </div>
//                   <div
//                     className="btn plus-icon-container"
//                     onClick={() => toggleDropdown(octave)}
//                   >
//                     <div
//                       className={
//                         octave.open ? "plus-icon rotate45" : "plus-icon"
//                       }
//                     >
//                       <div className="plus-icon-line plus-icon-line1"></div>
//                       <div className="plus-icon-line plus-icon-line2"></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className={
//                     octave.open
//                       ? "fret-dropdown-container show"
//                       : "fret-dropdown-container"
//                   }
//                 >
//                   {octave.frets.map((fret, index) => {
//                     return (
//                       <div
//                         key={crypto.randomUUID()}
//                         className={
//                           fret ? "fret-choice selected" : "fret-choice"
//                         }
//                         onClick={() => handleFretChoice(octave, index)}
//                       >
//                         {index + 1}
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )

//   function handleSelectAll(octave) {
//     const octaveToChange = frets.find(oct => oct.octave === octave.octave)
//     for (let i = 0; i < octaveToChange.frets.length; i++) {
//       if (octaveToChange.allSelected) {
//         octaveToChange.frets[i] = false
//       } else {
//         octaveToChange.frets[i] = true
//       }
//     }
//     octaveToChange.allSelected = !octaveToChange.allSelected
//     setFrets(currentFrets => {
//       return currentFrets.toSpliced(octave.octave, 1, octaveToChange)
//     })
//   }

//   function toggleDropdown(octave) {
//     const octaveToChange = frets.find(oct => oct.octave === octave.octave)
//     octaveToChange.open = !octaveToChange.open
//     setFrets(currentFrets => {
//       return currentFrets.toSpliced(octave.octave, 1, octaveToChange)
//     })
//   }

//   function handleFretChoice(octave, index) {
//     const octaveToChange = frets.find(oct => oct.id === octave.id)
//     octaveToChange.frets[index] = !octaveToChange.frets[index]
//     if (allSelectedOrDeselected(octave, index)) {
//       octaveToChange.allSelected = !octaveToChange.allSelected
//     }
//     setFrets(currentFrets => {
//       return currentFrets.toSpliced(octave.id, 1, octaveToChange)
//     })
//   }

//   function allSelectedOrDeselected(octave, index) {
//     return (
//       octave.frets.every(fret => fret === octave.frets[index]) &&
//       octave.frets[index] !== octave.allSelected
//     )
//   }
// }

export function FretsSettingSame() {
  const {
    t,
    language,
    pointsOn,
    fretsSame,
    setFretsSame,
    strings,
    instrument
  } = useContext(Context)

  return (
    <div>
      {fretsSame.map((octave, octaveIndex) => {
        return (
          <div className="widget-content">
            <div className="label">{octave[language]}</div>
            <div className="btn-container-grid">
              <div key={crypto.randomUUID()} className="fret-choice-wrapper">
                <div className="fret-choice-container">
                  <div
                    className={octave.allSelected ? "btn selected" : "btn"}
                    onClick={() => handleSelectAll(octave, octaveIndex)}
                  >
                    {octave.allSelected ? t.all : t.none}
                  </div>
                  <div
                    className="btn plus-icon-container"
                    onClick={() => toggleDropdown(octave, octaveIndex)}
                  >
                    <div
                      className={
                        octave.open ? "plus-icon rotate45" : "plus-icon"
                      }
                    >
                      <div className="plus-icon-line plus-icon-line1"></div>
                      <div className="plus-icon-line plus-icon-line2"></div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    octave.open
                      ? "fret-dropdown-container show"
                      : "fret-dropdown-container"
                  }
                >
                  {octave.frets.map((fret, fretIndex) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className={
                          fret.state ? "fret-choice selected" : "fret-choice"
                        }
                        onClick={() =>
                          handleFretChoice(fret, octaveIndex, fretIndex)
                        }
                      >
                        {fret.name[instrument][language]}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  function handleSelectAll(string, octaveIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    for (let i = 0; i < stringToChange.frets.length; i++) {
      if (stringToChange.allSelected) {
        stringToChange.frets[i].state = false
      } else {
        stringToChange.frets[i].state = true
      }
    }
    stringToChange.allSelected = !stringToChange.allSelected
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function toggleDropdown(string, octaveIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    console.log(stringToChange)
    stringToChange.open = !stringToChange.open
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function handleFretChoice(fret, string, octaveIndex, stringIndex, fretIndex) {
    const stringToChange = fretsIndi[octaveIndex].find(
      str => str.string === string.string
    )
    console.log(stringToChange.frets[fretIndex].state)
    stringToChange.frets[fretIndex].state =
      !stringToChange.frets[fretIndex].state
    if (allSelectedOrDeselected(string, fretIndex)) {
      stringToChange.allSelected = !stringToChange.allSelected
    }
    const octaveToChange = fretsIndi[octaveIndex]

    setFretsIndi(currentFrets => {
      return currentFrets.toSpliced(octaveIndex, 1, octaveToChange)
    })
  }

  function allSelectedOrDeselected(string, fretIndex) {
    return (
      string.frets.every(fret => fret === string.frets[fretIndex]) &&
      string.frets[fretIndex] !== string.allSelected
    )
  }
}
