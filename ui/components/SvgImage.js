import React, { useEffect, useRef, useState, useCallback } from "react";

// https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { onCompleted, onError } = options;

  useEffect(() => {
    const importIcon = async () => {
      alert('effect')
      try {
        ImportedIconRef.current = (
          await import(`ui/svg/${name}.svg`)
        ).ReactComponent;
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current);
        }
      } catch (err) {
        console.log(err)
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();


  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}


/**
 * Simple wrapper for dynamic SVG import hook. You can implement your own wrapper,
 * or even use the hook directly in your components.
 */
export const SvgImage = ({ name, onCompleted, onError, ...props }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError
  });

  // console.log(error, loading, SvgIcon)


  if (error) {   console.log(error.message)
;     return error.message; }
  if (loading) { return "Loading..."; }
  if (SvgIcon) {
    console.log("Svg", SvgIcon)
    return <SvgIcon {...props} />;
  }

  return null;
};

// export default function App() {
//   const [name, setName] = useState("svg1");

//   const handleOnCompleted = useCallback(
//     (iconName) => console.log(`${iconName} successfully loaded`),
//     []
//   );

//   const handleIconError = useCallback((err) => console.error(err.message), []);

//   return (
//     <div className="App">
//       <button
//         onClick={() =>
//           setName((prevName) => (prevName === "svg1" ? "svg2" : "svg1"))
//         }
//       >
//         Change Icon
//       </button>
//       <section>
//         <Icon
//           name={name}
//           fill="gray"
//           onCompleted={handleOnCompleted}
//           onError={handleIconError}
//         />
//         <Icon
//           name="svg1"
//           fill="gray"
//           width="300"
//           onCompleted={handleOnCompleted}
//           onError={handleIconError}
//         />
//         <Icon
//           name="svg2"
//           fill="darkblue"
//           height="100"
//           onCompleted={handleOnCompleted}
//           onError={handleIconError}
//         />
//       </section>
//     </div>
//   );
// }
