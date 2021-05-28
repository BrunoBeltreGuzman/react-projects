import React from "react";
import ligth from "../styles/ligth.module.css";
import dark from "../styles/dark.module.css";
import Link from "next/link";

export default function index() {
       const [theme, setTheme] = React.useState(dark);
       React.useEffect(() => {
              const localTheme = localStorage.getItem("theme");
              switch (localTheme) {
                     case "light":
                            setTheme(ligth);
                            break;

                     case "dark":
                            setTheme(dark);
                            break;

                     default:
                            localStorage.setItem("theme", "dark");
                            setTheme(dark);
                            break;
              }
       }, []);
       return (
              <div className={theme.container}>
                     <h1>Hello World!!</h1>
                     <br />
                     <br />
                     <br />
                     <button
                            onClick={function () {
                                   localStorage.setItem("theme", "light");
                                   setTheme(ligth);
                            }}
                     >
                            light
                     </button>
                     <br />
                     <button
                            onClick={function () {
                                   localStorage.setItem("theme", "dark");
                                   setTheme(dark);
                            }}
                     >
                            dark
                     </button>
                     <br />
                     <br />
                     <Link href={"/home"}>Home</Link>
              </div>
       );
}
