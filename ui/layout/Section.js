import { traits } from "helpers/traits";

const classes = traits({
  bgColor: {
    white: "bg-white",
    yellow: "bg-sy-yellow",
    black: "bg-black",
    earth: "bg-sy-earth",
  },
  textColor: {
    black: "text-black",
    white: "text-white",
  },
  divide: {
    true: "border-t border-black border-opacity-5",
  },
});

export default function Section({
  theme,
  children,
  className,
  image,
  nodeType: Node = "section",
  ...props
}) {
  classes.defaults({
    bgColor: "white",
    textColor: "black",
    divide: false,
  });

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "0% 50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Node
      className={classes.apply(
        props,
        "flex flex-col items-center py-16",
        className
      )}
      style={image ? style : null}
    >
      {children}
    </Node>
  );
}
